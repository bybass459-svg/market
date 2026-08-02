// supabase.js - Supabase Client Configuration
// Place this in your project root

(function() {
    // Check if already initialized
    if (window.supabaseClient) {
        console.log('Supabase already initialized');
        return;
    }

    const SUPABASE_URL = 'https://waiqlvhlgrsjrajqimqy.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_MiTnIkn0C8d0cUig_DUQTA_QS-GJHAu';

    // Check if supabase is already loaded globally
    if (typeof supabase !== 'undefined' && supabase.createClient) {
        try {
            window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            console.log('✅ Supabase client initialized from existing');
            document.dispatchEvent(new Event('supabaseReady'));
            return;
        } catch(e) {
            console.warn('Error creating client from existing supabase:', e);
        }
    }

    // Load Supabase library
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
    script.onload = function() {
        try {
            if (typeof supabase !== 'undefined' && supabase.createClient) {
                window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                console.log('✅ Supabase client initialized');
                document.dispatchEvent(new Event('supabaseReady'));
            } else {
                console.error('❌ Supabase library loaded but createClient not available');
                document.dispatchEvent(new Event('supabaseError'));
            }
        } catch(e) {
            console.error('❌ Error initializing Supabase:', e);
            document.dispatchEvent(new Event('supabaseError'));
        }
    };
    script.onerror = function() {
        console.error('❌ Failed to load Supabase library');
        document.dispatchEvent(new Event('supabaseError'));
    };
    document.head.appendChild(script);

    // Store config for later use
    window.SUPABASE_URL = SUPABASE_URL;
    window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;

    console.log('📦 Loading Supabase client...');
})();
