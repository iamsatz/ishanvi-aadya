package com.ishanvi.aadya.learn;

import android.content.res.Configuration;
import android.webkit.WebView;

import androidx.activity.OnBackPressedCallback;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private static final String TV_FLAG_JS =
        "window.__ANDROID_TV__=true;window.dispatchEvent(new Event('android-tv-ready'));";

    private static final String BACK_JS =
        "window.dispatchEvent(new CustomEvent('android-back'));";

    @Override
    public void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        wireHardwareBack();
    }

    @Override
    public void onResume() {
        super.onResume();
        injectTvFlag();
    }

    private void injectTvFlag() {
        if (!isTelevision()) return;
        if (getBridge() == null) return;

        WebView webView = getBridge().getWebView();
        if (webView == null) return;

        webView.post(() -> webView.evaluateJavascript(TV_FLAG_JS, null));
    }

    private void wireHardwareBack() {
        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                if (getBridge() == null) {
                    setEnabled(false);
                    getOnBackPressedDispatcher().onBackPressed();
                    return;
                }
                WebView webView = getBridge().getWebView();
                if (webView == null) {
                    setEnabled(false);
                    getOnBackPressedDispatcher().onBackPressed();
                    return;
                }
                webView.post(() -> webView.evaluateJavascript(BACK_JS, null));
            }
        });
    }

    private boolean isTelevision() {
        int uiMode = getResources().getConfiguration().uiMode & Configuration.UI_MODE_TYPE_MASK;
        return uiMode == Configuration.UI_MODE_TYPE_TELEVISION;
    }
}
