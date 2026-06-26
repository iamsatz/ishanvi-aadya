package com.ishanvi.aadya.learn;

import android.content.res.Configuration;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private static final String TV_FLAG_JS =
        "window.__ANDROID_TV__=true;window.dispatchEvent(new Event('android-tv-ready'));";

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

    private boolean isTelevision() {
        int uiMode = getResources().getConfiguration().uiMode & Configuration.UI_MODE_TYPE_MASK;
        return uiMode == Configuration.UI_MODE_TYPE_TELEVISION;
    }
}
