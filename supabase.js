// supabase.js - Final Version
(function() {
    // Check if already initialized
    if (window.supabaseClient) {
        console.log('✅ Supabase already initialized');
        return;
    }

    const SUPABASE_URL = 'https://waiqlvhlgrsjrajqimqy.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_MiTnIkn0C8d0cUig_DUQTA_QS-GJHAu';

    console.log('📦 Initializing Supabase client...');

    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
    script.async = true;
    
    script.onload = function() {
        try {
            if (typeof supabase !== 'undefined' && supabase.createClient) {
                window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
                    auth: {
                        persistSession: true,
                        autoRefreshToken: true,
                        detectSessionInUrl: false  // IMPORTANT: Disable auto-detection
                    }
                });
                console.log('✅ Supabase client initialized successfully');
                
                // Test connection
                window.supabaseClient.from('categories').select('count', { count: 'exact', head: true }).then(function(result) {
                    if (result.error) {
                        console.warn('⚠️ Supabase connection test failed:', result.error.message);
                    } else {
                        console.log('✅ Supabase connection test passed');
                    }
                });
                
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

    window.SUPABASE_URL = SUPABASE_URL;
    window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;

    setTimeout(function() {
        if (!window.supabaseClient) {
            console.warn('⚠️ Supabase loading timeout');
            document.dispatchEvent(new Event('supabaseError'));
        }
    }, 10000);
})();
