/* ============================================================
   Reasoning GP — shared TTS voice selection
   ------------------------------------------------------------
   Single source of truth for "which speech-synthesis voice do
   we narrate with". Extracted verbatim from the Clinical Audios
   player (pages/audios.html) so EVERY page that speaks aloud —
   the AI Patient Simulator, the AI Mock Exam Circuit, the
   audios player — picks the *exact same* voice.

   It also honours the voice the user explicitly chose on the
   Clinical Audios page (localStorage 'rgp.audio.voice.v1'), so
   their preferred natural voice carries across the whole site.
   ============================================================ */
(function(){
  'use strict';
  var VOICE_STORE = 'rgp.audio.voice.v1';

  function allVoices(){
    try{ return (window.speechSynthesis ? window.speechSynthesis.getVoices() : []) || []; }
    catch(e){ return []; }
  }

  // Rank a voice: prefer en-GB, then natural/neural/Siri/enhanced engines,
  // then named UK voices; penalise basic robotic voices. (Identical to the
  // Clinical Audios ranking.)
  function rankVoice(v){
    var n = (v.name||'')+' '+(v.voiceURI||'');
    var score = 0;
    if(/en-GB/i.test(v.lang)) score += 40; else if(/^en[-_]/i.test(v.lang)) score += 12;
    if(/siri/i.test(n)) score += 34;                // iOS Siri voices — most human
    if(/natural/i.test(n)) score += 30;             // MS "Online (Natural)"
    if(/enhanced|premium/i.test(n)) score += 26;    // iOS/macOS downloadable enhanced voices
    if(/\bgoogle\b/i.test(n)) score += 22;          // Google neural (Android/Chrome)
    if(/neural/i.test(n)) score += 20;
    if(/online/i.test(n)) score += 10;
    if(/libby|sonia|ryan|hazel|george|thomas|maisie|abbi|bella|elliot|ollie|alfie|kate|serena|stephanie|daniel|arthur|martha/i.test(n)) score += 8;
    if(/female|woman/i.test(n)) score += 1;
    if(/compact|eloquence|espeak|robot|fallback/i.test(n)) score -= 30; // basic robotic voices
    if(v.localService === false) score += 6;
    return score;
  }

  function isNatural(v){
    return /natural|google|neural|premium|enhanced|online|siri/i.test((v.name||'')+' '+(v.voiceURI||''));
  }

  // Pick the best voice: the user's explicit choice if set & present,
  // otherwise the highest-ranked available voice. Pass an optional voices
  // array (e.g. a cached one); defaults to a live getVoices() read.
  function pickBest(voices){
    var vs = (voices && voices.length ? voices : allVoices()).slice();
    if(!vs.length) return null;
    var chosen = null;
    try{ chosen = localStorage.getItem(VOICE_STORE) || null; }catch(e){}
    if(chosen){
      var c = vs.filter(function(v){ return v.voiceURI===chosen; })[0];
      if(c) return c;
    }
    vs.sort(function(a,b){ return rankVoice(b)-rankVoice(a); });
    return vs[0];
  }

  window.RGP_TTS = { rankVoice:rankVoice, isNatural:isNatural, pickBest:pickBest, VOICE_STORE:VOICE_STORE };
})();
