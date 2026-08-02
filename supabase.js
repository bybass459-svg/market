// supabase.js - Supabase Client Configuration
// Place this in your project root

const SUPABASE_URL = 'https://waiqlvhlgrsjrajqimqy.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_MiTnIkn0C8d0cUig_DUQTA_QS-GJHAu';

// Load Supabase library
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
script.onload = function() {
    const { createClient } = supabase;
    window.supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Supabase client initialized');
    
    // Dispatch event when client is ready
    document.dispatchEvent(new Event('supabaseReady'));
};
document.head.appendChild(script);

// Export for use in other files
window.SUPABASE_URL = SUPABASE_URL;
window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
