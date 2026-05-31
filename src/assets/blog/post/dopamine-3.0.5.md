# Dopamine 3.0.5

Hello everyone!

I'm thrilled to bring you **Dopamine 3.0.5**, a release that's all about making your music experience richer and more personal. This update introduces several features that have been highly requested, along with a solid round of bug fixes to keep things running smoothly.

The star of this release is **ReplayGain support**, which ensures consistent volume levels across your library. No more scrambling for the volume knob between tracks. On top of that, GNU/Linux users get some well-deserved love with a brand-new **Adwaita theme** that fits right in with a GNOME desktop.

For Windows users, you can now control playback directly from the **taskbar media controls** by hovering over the Dopamine icon: a small but convenient quality-of-life improvement. And if you like to personalize your library, you'll be happy to know you can now **edit album covers** directly from within Dopamine.

Here’s the change log:

### Added

- Added an Adwaita theme, because GNU/Linux deserves some love.
- Added Windows taskbar media controls accessible by hovering over the app icon in the taskbar
- Added a "Refresh now" button to the main menu
- Added ReplayGain support
- Added option to show album name on the now playing page
- Added possibility to edit the album cover

### Changed

- Discord Rich Presence says "Listening to" instead of "Playing"
- Improved scaling of different parts of the user interface
- Updated the Czech translation
- Updated the German translation
- Updated the Hebrew translation
- Updated the Russian translation
- Updated the Vietnamese translation

### Fixed

- Saving a rating to an MP3 file could create an ID3v1 tag, causing genres to be stored and displayed as their numeric ID3v1 code (e.g. "Eurodance" becoming "54")
- It is not possible to edit songs from the Songs screen
- There is no scroll bar in the smart playlist editor
- Loop one does not work correctly when using gapless or crossfading playback
- When exiting Dopamine, the Discord status doesn't disappear.
- It's not always clear when Dopamine is refreshing the collection

Download [here](https://github.com/digimezzo/dopamine/releases/tag/v3.0.5).

P.S.: If you enjoy Dopamine, please consider donating via [PayPal](https://www.paypal.com/donate/?hosted_button_id=N9Z4D62P24KRU) or buying me a [coffee](https://ko-fi.com/S6S11K63U). Your support keeps the music going!
