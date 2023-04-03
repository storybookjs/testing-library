# v0.1.0 (Mon Apr 03 2023)

:tada: This release contains work from a new contributor! :tada:

Thank you, Kasper Peulen ([@kasperpeulen](https://github.com/kasperpeulen)), for all your work!

#### 🚀 Enhancement


#### 🐛 Bug Fix

- Support Storybook 7.0.0 [#34](https://github.com/storybookjs/testing-library/pull/34) ([@yannbf](https://github.com/yannbf))
- Make `waitFor` interceptable and don't override interval/timeout [#23](https://github.com/storybookjs/testing-library/pull/23) ([@ghengeveld](https://github.com/ghengeveld) [@yannbf](https://github.com/yannbf))
- support storybook 7.0 [#30](https://github.com/storybookjs/testing-library/pull/30) ([@yannbf](https://github.com/yannbf))

#### Authors: 3

- Gert Hengeveld ([@ghengeveld](https://github.com/ghengeveld))
- Kasper Peulen ([@kasperpeulen](https://github.com/kasperpeulen))
- Yann Braga ([@yannbf](https://github.com/yannbf))

---

# v0.0.13 (Mon Jun 13 2022)

#### 🐛 Bug Fix

- Fix dependency of @storybook/instrumenter [#22](https://github.com/storybookjs/testing-library/pull/22) ([@yannbf](https://github.com/yannbf))

#### Authors: 1

- Yann Braga ([@yannbf](https://github.com/yannbf))

---

# v0.0.12 (Fri Jun 10 2022)

#### 🐛 Bug Fix

- loosen version ranges of storybook so we can start bench testing 7.0.0 alpha releases [#21](https://github.com/storybookjs/testing-library/pull/21) ([@ndelangen](https://github.com/ndelangen))

#### Authors: 1

- Norbert de Langen ([@ndelangen](https://github.com/ndelangen))

---

# v0.0.11 (Thu Apr 21 2022)

### Release Notes

#### Revert "feat: upgrade testing library and user event" ([#19](https://github.com/storybookjs/testing-library/pull/19))

Unfortunately `@storybook/testing-library` had to downgrade `@testing-library/user-event` to version 13. User event v14 is working ok for most projects, but projects using Svelte, Vue, HTML and Web components break because of an issue in one of user-event's dependencies.

If you are not affected by this problem and want to use `@storybook/testing-library` with user-event v14, you can use the `@storybook/testing-library@beta` version.

---

#### 🐛 Bug Fix

- Revert "feat: upgrade testing library and user event" [#19](https://github.com/storybookjs/testing-library/pull/19) ([@yannbf](https://github.com/yannbf))

#### Authors: 1

- Yann Braga ([@yannbf](https://github.com/yannbf))

---

# v0.0.10 (Tue Apr 19 2022)

### Release Notes

#### feat: upgrade testing library and user event ([#18](https://github.com/storybookjs/testing-library/pull/18))

`@storybook/testing-library` now uses `@testing-library/user-event` **version 14**! 🎉 

There are several new features and bugfixes and you can check them in the [user-event release page](https://github.com/testing-library/user-event/releases/tag/v14.0.0).

---

#### 🐛 Bug Fix

- feat: upgrade testing library and user event [#18](https://github.com/storybookjs/testing-library/pull/18) ([@yannbf](https://github.com/yannbf))

#### Authors: 1

- Yann Braga ([@yannbf](https://github.com/yannbf))

---

# v0.0.9 (Fri Feb 04 2022)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Yann Braga ([@yannbf](https://github.com/yannbf))

:heart: Gert Hengeveld ([@ghengeveld](https://github.com/ghengeveld))

:heart: Jean-Michel FRANCOIS ([@jmfrancois](https://github.com/jmfrancois))

:heart: Michael Shilman ([@shilman](https://github.com/shilman))

#### 🐛 Bug Fix

- deps: allow storybook 6.5 prerelease versions [#13](https://github.com/storybookjs/testing-library/pull/13) ([@yannbf](https://github.com/yannbf))
- chore: add auto-release process [#12](https://github.com/storybookjs/testing-library/pull/12) ([@yannbf](https://github.com/yannbf))
- chore: upgrade libs to be aligned with current stable version [#11](https://github.com/storybookjs/testing-library/pull/11) ([@jmfrancois](https://github.com/jmfrancois))
- feat: support cjs and esm [#6](https://github.com/storybookjs/testing-library/pull/6) ([@yannbf](https://github.com/yannbf))
- fix: change output target to commonjs [#5](https://github.com/storybookjs/testing-library/pull/5) ([@yannbf](https://github.com/yannbf))
- fix: mutate screen object [#4](https://github.com/storybookjs/testing-library/pull/4) ([@yannbf](https://github.com/yannbf))
- feat: add typescript support [#1](https://github.com/storybookjs/testing-library/pull/1) ([@yannbf](https://github.com/yannbf))

#### ⚠️ Pushed to `main`

- chore: fix release process ([@yannbf](https://github.com/yannbf))
- 0.0.8 ([@ghengeveld](https://github.com/ghengeveld))
- Update linear-export.yml ([@shilman](https://github.com/shilman))
- Add linear export ([@shilman](https://github.com/shilman))
- 0.0.7 ([@ghengeveld](https://github.com/ghengeveld))
- Clear output dir before building ([@ghengeveld](https://github.com/ghengeveld))
- 0.0.6 ([@ghengeveld](https://github.com/ghengeveld))
- Bump deps and add @types/react to fix compilation issue ([@ghengeveld](https://github.com/ghengeveld))
- 0.0.5 ([@ghengeveld](https://github.com/ghengeveld))
- 0.0.4 ([@yannbf](https://github.com/yannbf))
- 0.0.3 ([@ghengeveld](https://github.com/ghengeveld))
- Use highest valid timeout value ([@ghengeveld](https://github.com/ghengeveld))
- 0.0.2 ([@ghengeveld](https://github.com/ghengeveld))
- Use prepack instead of prepublish ([@ghengeveld](https://github.com/ghengeveld))
- 0.0.1 ([@ghengeveld](https://github.com/ghengeveld))
- Use latest beta ([@ghengeveld](https://github.com/ghengeveld))
- 0.0.0 ([@ghengeveld](https://github.com/ghengeveld))
- Don't timeout after 1 minute while debugging ([@ghengeveld](https://github.com/ghengeveld))
- Add eslint/prettier config ([@ghengeveld](https://github.com/ghengeveld))
- 0.0.0-alpha.3 ([@yannbf](https://github.com/yannbf))
- 0.0.0-alpha.2 ([@ghengeveld](https://github.com/ghengeveld))
- Don't time out while debugging async methods ([@ghengeveld](https://github.com/ghengeveld))
- Initial commit ([@ghengeveld](https://github.com/ghengeveld))

#### Authors: 4

- Gert Hengeveld ([@ghengeveld](https://github.com/ghengeveld))
- Jean-Michel FRANCOIS ([@jmfrancois](https://github.com/jmfrancois))
- Michael Shilman ([@shilman](https://github.com/shilman))
- Yann Braga ([@yannbf](https://github.com/yannbf))
