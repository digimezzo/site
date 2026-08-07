# Dopamine 3.0.8

Hello everyone!

I am happy to share **Dopamine 3.0.8**, a quality-of-life update that improves navigation and customization, while also delivering important fixes for GNU/Linux packaging.

This release introduces a handy **keyboard letter navigation feature** on the artists and genres screens. Pressing a letter now jumps to matching entries and focuses their albums, making large libraries much faster to browse. On the personalization side, artist visuals get more flexible with new options to **show artist images as a background** and **edit artist images** directly (thank you @FranzDeschler).

Alongside these features, the backup flow for ratings and love data has been improved, several translations were updated by contributors, and Snap-related issues were fixed, including support for "Show in Folder" outside of `/home` (thank you @mvanhorn).

Here is the full change log:

### Added

- Pressing a letter on the keyboard now scrolls to that letter on artists and genres screens and selects all artists and genres starting with that letter, focusing on albums for those artists or genres
- Added option to show artist image as background (Thank you @FranzDeschler)
- Added option to edit artist images (Thank you @FranzDeschler)

### Changed

- Improved rating and love backup
- Updated the Bulgarian translation (Thank you kukata)
- Updated the Simplified Chinese translation (Thank you @jeremyooh)
- Updated the Portuguese translation (Thank you @Blackspirits)
- Updated the Vietnamese translation (Thank you @honhatduy)

### Fixed

- Scroll issues on the playlists screen when using compact songs list
- "Show in Folder" in Snap version does not work for directories outside of /home (Thank you @mvanhorn)
- Snap package is broken

Download [here](https://github.com/digimezzo/dopamine/releases/tag/v3.0.8).

P.S.: If you enjoy Dopamine, please consider donating via [PayPal](https://www.paypal.com/donate/?hosted_button_id=N9Z4D62P24KRU) or buying me a [coffee](https://ko-fi.com/S6S11K63U). Your support keeps the music going!