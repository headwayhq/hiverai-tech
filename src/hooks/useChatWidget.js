import { useEffect } from 'react'

export default function useChatWidget(websiteToken) {
  useEffect(() => {
    // Remove any existing widget from a previous agent page
    const existingBubble = document.querySelector('.woot--bubble-holder')
    if (existingBubble) existingBubble.remove()
    const existingWidget = document.querySelector('.woot-widget-holder')
    if (existingWidget) existingWidget.remove()
    const existingFrames = document.querySelectorAll('iframe[id^="chatwoot"]')
    existingFrames.forEach(f => f.remove())

    // Reset chatwoot state
    if (window.chatwootSDK) {
      delete window.chatwootSDK
    }
    if (window.$chatwoot) {
      delete window.$chatwoot
    }

    // Remove any previously injected widget scripts
    const oldScripts = document.querySelectorAll('script[src*="chat-widget.hiverhq.com"]')
    oldScripts.forEach(s => s.remove())

    const CDN_URL = 'https://chat-widget.hiverhq.com/chat-widget'
    const script = document.createElement('script')
    script.src = CDN_URL + '/js/sdk.js'
    script.defer = true
    script.async = true
    script.onload = () => {
      window.hiverChatWidgetSettings = window.hiverChatWidgetSettings || {}
      window.hiverChatWidgetSettings.position = 'right'
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken,
          baseUrl: '',
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      script.remove()
      const bubble = document.querySelector('.woot--bubble-holder')
      if (bubble) bubble.remove()
      const widget = document.querySelector('.woot-widget-holder')
      if (widget) widget.remove()
      const frames = document.querySelectorAll('iframe[id^="chatwoot"]')
      frames.forEach(f => f.remove())
      // Clean up globals
      delete window.chatwootSDK
      delete window.$chatwoot
    }
  }, [websiteToken])
}
