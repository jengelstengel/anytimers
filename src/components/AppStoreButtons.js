import React from 'react'

class AppStoreButtons extends React.Component {
  render() {
    return (
      <section id="app-store" className="form-section">
        <div className="form-wrapper">
          <h5>Get started with Anytimers today</h5>
          <h6>Find it on your favorite app store.</h6>
          <div className="appstore-wrapper">
            <div className="appstore-fields">
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--appstore"
              >
                Play Store
              </a>
              <a
                href="https://www.apple.com/nl/ios/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--appstore"
              >
                App Store
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AppStoreButtons
