/* ============================================
   Reasoning GP — QRISK3-2017 engine (faithful port)

   Ported from the open-source QRISK3-2017 algorithm released by
   ClinRisk Ltd. under the GNU Lesser General Public License
   (https://qrisk.org/src.php). Coefficients verified against the
   CRAN "QRISK3" reference implementation of the original C source.

   REQUIRED DISCLAIMER (LGPL additional term — must be shown with any score):
   "The initial version of this file, to be found at
    http://svn.clinrisk.co.uk/opensource/qrisk2, faithfully implements
    QRISK3-2017. ClinRisk Ltd. have released this code under the GNU Lesser
    General Public License to enable others to implement the algorithm
    faithfully. However, ... it is the responsibility of the end user to check
    that the source that they receive produces the same results as the original
    code found at https://qrisk.org. Inaccurate implementations of risk scores
    can lead to wrong patients being given the wrong treatment."
   ============================================ */
(function(){

  // o = { female(bool), age, ethrisk(1-9), smoke(1-5), bmi, rati, sbp, sbps5, town,
  //       af, antipsy, steroids, impotence, migraine, ra, renal, semi, sle,
  //       treatedhyp, type1, type2, fhcvd }
  function qrisk3(o){
    const female = !!o.female;
    const ethrisk = clampInt(o.ethrisk, 1, 9, 1);
    const smoke   = clampInt(o.smoke, 1, 5, 1);
    let bmi = o.bmi;
    if (bmi == null || isNaN(bmi)) return null;
    if (bmi < 20) bmi = 20;          // official tool floors/caps BMI at 20–40
    if (bmi > 40) bmi = 40;
    const rati  = num(o.rati, 4);
    const sbp   = num(o.sbp, female ? 123.13 : 128.57);
    const sbps5 = num(o.sbps5, 0);
    const town  = num(o.town, 0);

    const b = {
      af: bin(o.af), antipsy: bin(o.antipsy), steroids: bin(o.steroids),
      impotence: bin(o.impotence), migraine: bin(o.migraine), ra: bin(o.ra),
      renal: bin(o.renal), semi: bin(o.semi), sle: bin(o.sle),
      treatedhyp: bin(o.treatedhyp), type1: bin(o.type1), type2: bin(o.type2),
      fhcvd: bin(o.fhcvd)
    };

    return female ? femaleScore(o.age, ethrisk, smoke, bmi, rati, sbp, sbps5, town, b)
                  : maleScore(o.age, ethrisk, smoke, bmi, rati, sbp, sbps5, town, b);
  }

  function femaleScore(age, ethrisk, smoke, bmi, rati, sbp, sbps5, town, b){
    const survivor = 0.988876402378082;
    const Iethrisk = [0, 0, 0.2804031433299542500000000, 0.5629899414207539800000000,
      0.2959000085111651600000000, 0.0727853798779825450000000, -0.1707213550885731700000000,
      -0.3937104331487497100000000, -0.3263249528353027200000000, -0.1712705688324178400000000];
    const Ismoke = [0, 0, 0.1338683378654626200000000, 0.5620085801243853700000000,
      0.6674959337750254700000000, 0.8494817764483084700000000];

    let dage = age / 10;
    let age_1 = Math.pow(dage, -2);
    let age_2 = dage;
    let dbmi = bmi / 10;
    let bmi_1 = Math.pow(dbmi, -2);
    let bmi_2 = Math.pow(dbmi, -2) * Math.log(dbmi);

    age_1 -= 0.053274843841791;
    age_2 -= 4.332503318786621;
    bmi_1 -= 0.154946178197861;
    bmi_2 -= 0.144462317228317;
    rati  -= 3.476326465606690;
    sbp   -= 123.130012512207030;
    sbps5 -= 9.002537727355957;
    town  -= 0.392308831214905;

    let a = 0;
    a += Iethrisk[ethrisk];
    a += Ismoke[smoke];

    a += age_1 * -8.1388109247726188000000000;
    a += age_2 *  0.7973337668969909800000000;
    a += bmi_1 *  0.2923609227546005200000000;
    a += bmi_2 * -4.1513300213837665000000000;
    a += rati  *  0.1533803582080255400000000;
    a += sbp   *  0.0131314884071034240000000;
    a += sbps5 *  0.0078894541014586095000000;
    a += town  *  0.0772237905885901080000000;

    a += b.af         * 1.5923354969269663000000000;
    a += b.antipsy    * 0.2523764207011555700000000;
    a += b.steroids   * 0.5952072530460185100000000;
    a += b.migraine   * 0.3012672608703450000000000;
    a += b.ra         * 0.2136480343518194200000000;
    a += b.renal      * 0.6519456949384583300000000;
    a += b.semi       * 0.1255530805882017800000000;
    a += b.sle        * 0.7588093865426769300000000;
    a += b.treatedhyp * 0.5093159368342300400000000;
    a += b.type1      * 1.7267977510537347000000000;
    a += b.type2      * 1.0688773244615468000000000;
    a += b.fhcvd      * 0.4544531902089621300000000;

    a += age_1 * (smoke===2 ? 1:0) * -4.7057161785851891000000000;
    a += age_1 * (smoke===3 ? 1:0) * -2.7430383403573337000000000;
    a += age_1 * (smoke===4 ? 1:0) * -0.8660808882939218200000000;
    a += age_1 * (smoke===5 ? 1:0) *  0.9024156236971064800000000;
    a += age_1 * b.af         * 19.9380348895465610000000000;
    a += age_1 * b.steroids   * -0.9840804523593628100000000;
    a += age_1 * b.migraine   *  1.7634979587872999000000000;
    a += age_1 * b.renal      * -3.5874047731694114000000000;
    a += age_1 * b.sle        * 19.6903037386382920000000000;
    a += age_1 * b.treatedhyp * 11.8728097339218120000000000;
    a += age_1 * b.type1      * -1.2444332714320747000000000;
    a += age_1 * b.type2      *  6.8652342000009599000000000;
    a += age_1 * bmi_1        * 23.8026234121417420000000000;
    a += age_1 * bmi_2        * -71.1849476920870070000000000;
    a += age_1 * b.fhcvd      *  0.9946780794043512700000000;
    a += age_1 * sbp          *  0.0341318423386154850000000;
    a += age_1 * town         * -1.0301180802035639000000000;
    a += age_2 * (smoke===2 ? 1:0) * -0.0755892446431930260000000;
    a += age_2 * (smoke===3 ? 1:0) * -0.1195119287486707400000000;
    a += age_2 * (smoke===4 ? 1:0) * -0.1036630639757192300000000;
    a += age_2 * (smoke===5 ? 1:0) * -0.1399185359171838900000000;
    a += age_2 * b.af         * -0.0761826510111625050000000;
    a += age_2 * b.steroids   * -0.1200536494674247200000000;
    a += age_2 * b.migraine   * -0.0655869178986998590000000;
    a += age_2 * b.renal      * -0.2268887308644250700000000;
    a += age_2 * b.sle        *  0.0773479496790162730000000;
    a += age_2 * b.treatedhyp *  0.0009685782358817443600000;
    a += age_2 * b.type1      * -0.2872406462448894900000000;
    a += age_2 * b.type2      * -0.0971122525906954890000000;
    a += age_2 * bmi_1        *  0.5236995893366442900000000;
    a += age_2 * bmi_2        *  0.0457441901223237590000000;
    a += age_2 * b.fhcvd      * -0.0768850516984230380000000;
    a += age_2 * sbp          * -0.0015082501423272358000000;
    a += age_2 * town         * -0.0315934146749623290000000;

    return 100.0 * (1 - Math.pow(survivor, Math.exp(a)));
  }

  function maleScore(age, ethrisk, smoke, bmi, rati, sbp, sbps5, town, b){
    const survivor = 0.977268040180206;
    const Iethrisk = [0, 0, 0.2771924876030827900000000, 0.4744636071493126800000000,
      0.5296172991968937100000000, 0.0351001591862990170000000, -0.3580789966932791900000000,
      -0.4005648523216514000000000, -0.4152279288983017300000000, -0.2632134813474996700000000];
    const Ismoke = [0, 0, 0.1912822286338898300000000, 0.5524158819264555200000000,
      0.6383505302750607200000000, 0.7898381988185801900000000];

    let dage = age / 10;
    let age_1 = Math.pow(dage, -1);
    let age_2 = Math.pow(dage, 3);
    let dbmi = bmi / 10;
    let bmi_1 = Math.pow(dbmi, -2);
    let bmi_2 = Math.pow(dbmi, -2) * Math.log(dbmi);

    age_1 -= 0.234766781330109;
    age_2 -= 77.284080505371094;
    bmi_1 -= 0.149176135659218;
    bmi_2 -= 0.141913309693336;
    rati  -= 4.300998687744141;
    sbp   -= 128.571578979492190;
    sbps5 -= 8.756621360778809;
    town  -= 0.526304900646210;

    let a = 0;
    a += Iethrisk[ethrisk];
    a += Ismoke[smoke];

    a += age_1 * -17.8397816660055750000000000;
    a += age_2 *   0.0022964880605765492000000;
    a += bmi_1 *   2.4562776660536358000000000;
    a += bmi_2 *  -8.3011122314711354000000000;
    a += rati  *   0.1734019685632711100000000;
    a += sbp   *   0.0129101265425533050000000;
    a += sbps5 *   0.0102519142912904560000000;
    a += town  *   0.0332682012772872950000000;

    a += b.af         * 0.8820923692805465700000000;
    a += b.antipsy    * 0.1304687985517351300000000;
    a += b.steroids   * 0.4548539975044554300000000;
    a += b.impotence  * 0.2225185908670538300000000;
    a += b.migraine   * 0.2558417807415991300000000;
    a += b.ra         * 0.2097065801395656700000000;
    a += b.renal      * 0.7185326128827438400000000;
    a += b.semi       * 0.1213303988204716400000000;
    a += b.sle        * 0.4401572174457522000000000;
    a += b.treatedhyp * 0.5165987108269547400000000;
    a += b.type1      * 1.2343425521675175000000000;
    a += b.type2      * 0.8594207143093222100000000;
    a += b.fhcvd      * 0.5405546900939015600000000;

    a += age_1 * (smoke===2 ? 1:0) * -0.2101113393351634600000000;
    a += age_1 * (smoke===3 ? 1:0) *  0.7526867644750319100000000;
    a += age_1 * (smoke===4 ? 1:0) *  0.9931588755640579100000000;
    a += age_1 * (smoke===5 ? 1:0) *  2.1331163414389076000000000;
    a += age_1 * b.af         *  3.4896675530623207000000000;
    a += age_1 * b.steroids   *  1.1708133653489108000000000;
    a += age_1 * b.impotence  * -1.5064009857454310000000000;
    a += age_1 * b.migraine   *  2.3491159871402441000000000;
    a += age_1 * b.renal      * -0.5065671632722369400000000;
    a += age_1 * b.treatedhyp *  6.5114581098532671000000000;
    a += age_1 * b.type1      *  5.3379864878006531000000000;
    a += age_1 * b.type2      *  3.6461817406221311000000000;
    a += age_1 * bmi_1        * 31.0049529560338860000000000;
    a += age_1 * bmi_2        * -111.2915718439164300000000000;
    a += age_1 * b.fhcvd      *  2.7808628508531887000000000;
    a += age_1 * sbp          *  0.0188585244698658530000000;
    a += age_1 * town         * -0.1007554870063731000000000;
    a += age_2 * (smoke===2 ? 1:0) * -0.0004985487027532612100000;
    a += age_2 * (smoke===3 ? 1:0) * -0.0007987563331738541400000;
    a += age_2 * (smoke===4 ? 1:0) * -0.0008370618426625129600000;
    a += age_2 * (smoke===5 ? 1:0) * -0.0007840031915563728900000;
    a += age_2 * b.af         * -0.0003499560834063604900000;
    a += age_2 * b.steroids   * -0.0002496045095297166000000;
    a += age_2 * b.impotence  * -0.0011058218441227373000000;
    a += age_2 * b.migraine   *  0.0001989644604147863100000;
    a += age_2 * b.renal      * -0.0018325930166498813000000;
    a += age_2 * b.treatedhyp *  0.0006383805310416501300000;
    a += age_2 * b.type1      *  0.0006409780808752897000000;
    a += age_2 * b.type2      * -0.0002469569558886831500000;
    a += age_2 * bmi_1        *  0.0050380102356322029000000;
    a += age_2 * bmi_2        * -0.0130744830025243190000000;
    a += age_2 * b.fhcvd      * -0.0002479180990739603700000;
    a += age_2 * sbp          * -0.0000127187419158845700000;
    a += age_2 * town         * -0.0000932996423232728880000;

    return 100.0 * (1 - Math.pow(survivor, Math.exp(a)));
  }

  function bin(x){ return x ? 1 : 0; }
  function num(x, fallback){ return (x == null || isNaN(x)) ? fallback : x; }
  function clampInt(x, lo, hi, fallback){ x = parseInt(x,10); if (isNaN(x)) return fallback; return Math.min(hi, Math.max(lo, x)); }

  window.RGP_QRISK3 = qrisk3;
})();
