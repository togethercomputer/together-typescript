# Changelog

## 0.30.0 (2025-11-04)

Full Changelog: [v0.29.0...v0.30.0](https://github.com/togethercomputer/together-typescript/compare/v0.29.0...v0.30.0)

### ⚠ BREAKING CHANGES

* **api:** The default max retries for api calls has changed from 5 to 2. This may result in more frequent non-200 responses.

### Features

* **api:** Change the default max retries from 5 to 2 ([f89b597](https://github.com/togethercomputer/together-typescript/commit/f89b5970f3b5af1cdaa904de20f0e1c0493671c6))


### Bug Fixes

* Do not auto-retry on 500 errors. 501+ can retry ([7ce8399](https://github.com/togethercomputer/together-typescript/commit/7ce83993a3550d5e8f75706114543f7d7dad9cfb))

## 0.29.0 (2025-10-30)

Full Changelog: [v0.28.0...v0.29.0](https://github.com/togethercomputer/together-typescript/compare/v0.28.0...v0.29.0)

### Features

* **api:** api update ([aeac27b](https://github.com/togethercomputer/together-typescript/commit/aeac27be216e075e69f1c031e732c178f94925b5))

## 0.28.0 (2025-10-23)

Full Changelog: [v0.27.0...v0.28.0](https://github.com/togethercomputer/together-typescript/compare/v0.27.0...v0.28.0)

### Features

* **api:** api update ([568c387](https://github.com/togethercomputer/together-typescript/commit/568c387273383faf4970fe3360943c4006ddcae3))


### Bug Fixes

* Narrow type resolution on image create api via response_format discrimination ([1f56b8d](https://github.com/togethercomputer/together-typescript/commit/1f56b8dd9f44a6914865e0d88973f8eb60f116d6))

## 0.27.0 (2025-10-21)

Full Changelog: [v0.26.0...v0.27.0](https://github.com/togethercomputer/together-typescript/compare/v0.26.0...v0.27.0)

### Features

* **api:** Rename evaluation sdks to evals ([4c3b732](https://github.com/togethercomputer/together-typescript/commit/4c3b732d55c852ba6b45cbed189dc729e660d6e2))

## 0.26.0 (2025-10-21)

Full Changelog: [v0.25.0...v0.26.0](https://github.com/togethercomputer/together-typescript/compare/v0.25.0...v0.26.0)

### Features

* **api:** api update ([9c3f92c](https://github.com/togethercomputer/together-typescript/commit/9c3f92cf75cfae116b27a9dee964b416adb7ef58))

## 0.25.0 (2025-10-21)

Full Changelog: [v0.24.0...v0.25.0](https://github.com/togethercomputer/together-typescript/compare/v0.24.0...v0.25.0)

### Features

* **api:** api update ([620f342](https://github.com/togethercomputer/together-typescript/commit/620f34250091e76c74feb0d1bdb9ed8972e63553))

## 0.24.0 (2025-10-20)

Full Changelog: [v0.23.0...v0.24.0](https://github.com/togethercomputer/together-typescript/compare/v0.23.0...v0.24.0)

### Features

* **api:** Add Video APIs ([7357d10](https://github.com/togethercomputer/together-typescript/commit/7357d10e9db6caeb01d8ed0a9d419289a17ae231))
* **api:** manual updates ([d27605f](https://github.com/togethercomputer/together-typescript/commit/d27605f5e212f577424d6d6bf79e3cded2b53613))
* **api:** manual updates ([e6d4a5a](https://github.com/togethercomputer/together-typescript/commit/e6d4a5a026d66fa897f56dc11760bfd7b5a918b6))
* **api:** manual updates ([aaaf373](https://github.com/togethercomputer/together-typescript/commit/aaaf373c003f3f439c7e70c1559726b7d2744e3c))
* **api:** manual updates ([3bb0334](https://github.com/togethercomputer/together-typescript/commit/3bb0334c85e9b30659d459295278f5e735cfd158))

## 0.23.0 (2025-10-10)

Full Changelog: [v0.22.0...v0.23.0](https://github.com/togethercomputer/together-typescript/compare/v0.22.0...v0.23.0)

### Features

* **api:** add evals api to config ([ce742fc](https://github.com/togethercomputer/together-typescript/commit/ce742fcb4a95e99fa2c4e9f5c479e294d8dbfc98))
* **api:** api update ([24e7fc8](https://github.com/togethercomputer/together-typescript/commit/24e7fc8228a835369895d809f3690173d06091a6))
* **api:** api update ([437cce9](https://github.com/togethercomputer/together-typescript/commit/437cce9feb367ba4073ea619594a64ee1e2dfeed))
* **api:** api update ([b4c3c0a](https://github.com/togethercomputer/together-typescript/commit/b4c3c0a49f56f2e50e4d9d7e87a0a1db598a56ac))
* **api:** api update ([9a5bfb7](https://github.com/togethercomputer/together-typescript/commit/9a5bfb7d5eabb6f89d8981d46b50061baef28c51))
* **api:** api update ([915a226](https://github.com/togethercomputer/together-typescript/commit/915a226ad75264493a4e67917215a02fb3bae907))
* **mcp:** add code execution tool ([c768bb9](https://github.com/togethercomputer/together-typescript/commit/c768bb9a09001ef9955a3c899e4cfc2d588350f2))


### Bug Fixes

* coerce nullable values to undefined ([f6c7e43](https://github.com/togethercomputer/together-typescript/commit/f6c7e4344493e694fc9752ff48cb976633ead25b))


### Performance Improvements

* faster formatting ([c25ec03](https://github.com/togethercomputer/together-typescript/commit/c25ec03731097381b0a9584a94ff4fa6073fe6cc))


### Chores

* add package to package.json ([72025f2](https://github.com/togethercomputer/together-typescript/commit/72025f28d2156a530f5ad3c41723ee3cc8706426))
* ci build action ([0f37b32](https://github.com/togethercomputer/together-typescript/commit/0f37b32dbee4ad5a5f19a6bb894f92cb2f5c36f4))
* **client:** qualify global Blob ([a9f7b6f](https://github.com/togethercomputer/together-typescript/commit/a9f7b6f6b5634630ea1978a5e362e627df8825ca))
* **deps:** update dependency @types/node to v20.17.58 ([f1839e8](https://github.com/togethercomputer/together-typescript/commit/f1839e85f502ad68c680556340d240dab3b28bd9))
* do not install brew dependencies in ./scripts/bootstrap by default ([1050534](https://github.com/togethercomputer/together-typescript/commit/1050534f4ed0420d6aaa2598211f6f505169f5f0))
* **internal:** codegen related update ([0ca46c4](https://github.com/togethercomputer/together-typescript/commit/0ca46c46bd358a67847f46d013f519aa3ee91325))
* **internal:** fix incremental formatting in some cases ([5a42924](https://github.com/togethercomputer/together-typescript/commit/5a429243535a917a619c682f0e9e181f47b00e25))
* **internal:** formatting change ([0282025](https://github.com/togethercomputer/together-typescript/commit/02820255f3c707f9170d987cefb2a74124aabad3))
* **internal:** ignore .eslintcache ([5752a33](https://github.com/togethercomputer/together-typescript/commit/5752a3320d48e0708d63d07c3a0a3c265bd49b71))
* **internal:** remove .eslintcache ([b41b509](https://github.com/togethercomputer/together-typescript/commit/b41b5092d3273c4013342fa7f7baff1035ab6b99))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([446dff9](https://github.com/togethercomputer/together-typescript/commit/446dff9b819d895eaa4c8b71652dc268c8ef695e))
* **internal:** update global Error reference ([e53b252](https://github.com/togethercomputer/together-typescript/commit/e53b25217887ab211b03b93e2c09f3da4b20ef1e))
* **internal:** use npm pack for build uploads ([246a904](https://github.com/togethercomputer/together-typescript/commit/246a9049ff91bb85949e2f0c630b2ad3e684752a))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([6b54b1d](https://github.com/togethercomputer/together-typescript/commit/6b54b1db48ede95e75def9c722059544fc108237))
* update CI script ([99cae2f](https://github.com/togethercomputer/together-typescript/commit/99cae2f05724e68687d6c704a5b29d31dd5fa11f))

## 0.22.0 (2025-08-13)

Full Changelog: [v0.21.1...v0.22.0](https://github.com/togethercomputer/together-typescript/compare/v0.21.1...v0.22.0)

### Features

* **api:** api update ([d9c06c5](https://github.com/togethercomputer/together-typescript/commit/d9c06c5fc910b4a2c22f0f551570926448a19bc7))
* **api:** api update ([1a141b5](https://github.com/togethercomputer/together-typescript/commit/1a141b59f55dddfdf0fb459e05b2fc7d30037dd2))


### Chores

* **internal:** move publish config ([cba5eb9](https://github.com/togethercomputer/together-typescript/commit/cba5eb9ea43f5b89581eacbe08dc1d35ab990a74))
* **internal:** update comment in script ([a8e5ba4](https://github.com/togethercomputer/together-typescript/commit/a8e5ba4a816caca0f8682fcf935a57b8c4ad7535))
* **internal:** update test skipping reason ([010a97c](https://github.com/togethercomputer/together-typescript/commit/010a97c61b8011d13ebfe8d26720bfc9c3e3258b))
* update @stainless-api/prism-cli to v5.15.0 ([fc26a78](https://github.com/togethercomputer/together-typescript/commit/fc26a7810f72a483c1b385ac1729e9768e486af7))

## 0.21.1 (2025-08-05)

Full Changelog: [v0.21.0...v0.21.1](https://github.com/togethercomputer/together-typescript/compare/v0.21.0...v0.21.1)

### Features

* **api:** api update ([7a8227d](https://github.com/togethercomputer/together-typescript/commit/7a8227d9f8132aba245a8f3ac39eb29b4a806927))


### Chores

* **internal:** remove redundant imports config ([c3242da](https://github.com/togethercomputer/together-typescript/commit/c3242dada950b34db48e16c4dd2467c46a7facee))

## 0.21.0 (2025-07-24)

Full Changelog: [v0.20.0...v0.21.0](https://github.com/togethercomputer/together-typescript/compare/v0.20.0...v0.21.0)

### Features

* **api:** api update ([628189f](https://github.com/togethercomputer/together-typescript/commit/628189f9e751e0ec8eeae733aecd210dbd901793))
* **api:** api update ([ef03895](https://github.com/togethercomputer/together-typescript/commit/ef03895d2f6f299939c8bec0bb0c6da0543fb8f2))
* **api:** api update ([35c3a4e](https://github.com/togethercomputer/together-typescript/commit/35c3a4e77ed9bab9708465a3d2da22519814fbc0))
* **api:** api update ([03aed33](https://github.com/togethercomputer/together-typescript/commit/03aed3300c951b08ef446b099406ab2a5299ea6b))
* **api:** manual updates ([96dff27](https://github.com/togethercomputer/together-typescript/commit/96dff2779d938435fed7ff05c10ceb585a9d7a97))
* **api:** manual updates ([bdf705c](https://github.com/togethercomputer/together-typescript/commit/bdf705c5ee169120e7f44f7e5f18b2be38edf8c3))
* **api:** Update stainless sdk ([9fb6846](https://github.com/togethercomputer/together-typescript/commit/9fb68467529945ccbc40c66a477815ac5a09545c))
* **api:** Upgrade Stainless sdk ([8c6dc1c](https://github.com/togethercomputer/together-typescript/commit/8c6dc1c700964cb299da982b07e4b8ee7fbe1abb))

## 0.20.0 (2025-07-10)

Full Changelog: [v0.19.0...v0.20.0](https://github.com/togethercomputer/together-typescript/compare/v0.19.0...v0.20.0)

### Features

* **api:** api update ([05c8970](https://github.com/togethercomputer/together-typescript/commit/05c897082594b0a53b51d18807597b402404734d))


### Chores

* make some internal functions async ([22030d5](https://github.com/togethercomputer/together-typescript/commit/22030d52aba4a91e39aa00c6cbee5a260839b582))

## 0.19.0 (2025-07-08)

Full Changelog: [v0.18.0...v0.19.0](https://github.com/togethercomputer/together-typescript/compare/v0.18.0...v0.19.0)

### Features

* **api:** adding audio APIs ([2d2fa9a](https://github.com/togethercomputer/together-typescript/commit/2d2fa9a94c35c66b39e088cfe9599f986bce545b))
* **api:** removed streaming from translation/transcription endpoints ([1b6c140](https://github.com/togethercomputer/together-typescript/commit/1b6c140c0e31ad8e55e2bb12d9da8198e451237c))

## 0.18.0 (2025-07-08)

Full Changelog: [v0.17.0...v0.18.0](https://github.com/togethercomputer/together-typescript/compare/v0.17.0...v0.18.0)

### Features

* **api:** api update ([b72aeed](https://github.com/togethercomputer/together-typescript/commit/b72aeedf599ce30d5bd1cdc5a3be1d44088bbc43))

## 0.17.0 (2025-07-03)

Full Changelog: [v0.16.0...v0.17.0](https://github.com/togethercomputer/together-typescript/compare/v0.16.0...v0.17.0)

### Features

* **api:** add batch api to config ([6bf62dd](https://github.com/togethercomputer/together-typescript/commit/6bf62dd3d983873c0321ca97f780b898be85f7c5))
* **api:** Add file_type and file_purpose ([f91fb18](https://github.com/togethercomputer/together-typescript/commit/f91fb1855454afb6ddda0484ee6cd385e10097b0))
* **api:** add files/upload apu support and switch upload_file method over to use it. ([5e60c99](https://github.com/togethercomputer/together-typescript/commit/5e60c99098e3046f9e0d540f0ae29c13eac413f7))
* **api:** address diagnostic issues in audio api, correct openapi issue in images api, disambiguate a response in finetune api, enable automated testing on finetune and images ([9131477](https://github.com/togethercomputer/together-typescript/commit/9131477f5980d16c3d6dc1f3b9d2dcf21895358d))
* **api:** api update ([0f63bf1](https://github.com/togethercomputer/together-typescript/commit/0f63bf166570b12a6ab71f1f6778fefb2409a5b5))
* **api:** api update ([cc8b7a8](https://github.com/togethercomputer/together-typescript/commit/cc8b7a8971d28a5214fb1edd5ba211d9ddebdf49))
* **api:** api update ([1df5bbe](https://github.com/togethercomputer/together-typescript/commit/1df5bbe5c565106587672364f72975bca01770a8))
* **api:** api update ([0b81ef9](https://github.com/togethercomputer/together-typescript/commit/0b81ef9c6645a6b92513ea1ad641542d1a9cbfdd))
* **api:** api update ([fd4611d](https://github.com/togethercomputer/together-typescript/commit/fd4611d598c597a521b4aa7114d9f6c586ed4966))
* **api:** api update ([ea28f8f](https://github.com/togethercomputer/together-typescript/commit/ea28f8f18912118374ff7c6dbdf54301da3a64f8))
* **api:** api update ([9d7d2f1](https://github.com/togethercomputer/together-typescript/commit/9d7d2f11e150bd3e0ec1ba9a6ccc33d27679bdc3))
* **api:** api update ([f52b93d](https://github.com/togethercomputer/together-typescript/commit/f52b93dfe3968326efefc5624beea20549656e10))
* **api:** api update ([ebf6451](https://github.com/togethercomputer/together-typescript/commit/ebf64513ab30e86579e8212042784c8dec1ad1c1))
* **api:** api update ([e50cdb2](https://github.com/togethercomputer/together-typescript/commit/e50cdb2d9a23607ba1c386f3b1739d66231f4590))
* **api:** api update ([158a5c8](https://github.com/togethercomputer/together-typescript/commit/158a5c89456605a303c55d4577d7e11d5dd847b1))
* **api:** Formatting fixes, some lint fixes ([6b6fc13](https://github.com/togethercomputer/together-typescript/commit/6b6fc137c34f63bbf356df610b2b198aa9109bb0))
* **api:** get test_code_interpreter passing ([b67a035](https://github.com/togethercomputer/together-typescript/commit/b67a035ebad8c3764c4a9b6919f302bfd19573cf))
* **api:** update spec / config to remove remaining codegen warnings ([1665d1f](https://github.com/togethercomputer/together-typescript/commit/1665d1f80c707b45d204997872fdcee741517861))
* **api:** Update spec and config to get all tests except code-interpolation an fine_tune unit tests working. ([1cb0018](https://github.com/togethercomputer/together-typescript/commit/1cb001870511f924acaee1bf67aad683abce9d22))
* **client:** add support for endpoint-specific base URLs ([41abee6](https://github.com/togethercomputer/together-typescript/commit/41abee6d1498a6695644adc6e2c3286403612998))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([38fdf05](https://github.com/togethercomputer/together-typescript/commit/38fdf059359e309e5dee1e1d627644eeb1193eff))
* **client:** don't send `Content-Type` for bodyless methods ([4104dc3](https://github.com/togethercomputer/together-typescript/commit/4104dc3d84e838d816af11ba0309eb7cadc564af))
* publish script — handle NPM errors correctly ([78d1a5c](https://github.com/togethercomputer/together-typescript/commit/78d1a5c718bbf5a2e2cd2cee8f850cc23cd1f690))
* **tests:** format ([82fad3c](https://github.com/togethercomputer/together-typescript/commit/82fad3cbfffd2bf042b07e34033d03d2390a34b8))
* **tests:** remove unused tests ([bb90a25](https://github.com/togethercomputer/together-typescript/commit/bb90a25b0433b454d19a77d45822618e46203878))


### Chores

* **api:** re-enable audio unit tests ([5ac5b53](https://github.com/togethercomputer/together-typescript/commit/5ac5b5332379c2f86bd2048edb914461cd3e76f2))
* **ci:** bump node version for release workflows ([681d96e](https://github.com/togethercomputer/together-typescript/commit/681d96e81cbdaa50d27519377ced7496574a49cd))
* **ci:** enable for pull requests ([b3c7e61](https://github.com/togethercomputer/together-typescript/commit/b3c7e615f530ee0acaf7554e080f8f2e97e7c3d5))
* **ci:** only run for pushes and fork pull requests ([448b1fa](https://github.com/togethercomputer/together-typescript/commit/448b1faa36bbd70f2a608b19aeb564e28043630d))
* **docs:** grammar improvements ([c9d78f6](https://github.com/togethercomputer/together-typescript/commit/c9d78f63e644492be7b0388acb8c5bc383f9fbf7))
* **docs:** use top-level-await in example snippets ([815f983](https://github.com/togethercomputer/together-typescript/commit/815f983932dfcc212c2e5d1efd46318d62c8eb7b))
* improve publish-npm script --latest tag logic ([1025321](https://github.com/togethercomputer/together-typescript/commit/102532181512dfe468208e12e64cff2961d59fca))
* **internal:** make base APIResource abstract ([d031002](https://github.com/togethercomputer/together-typescript/commit/d03100298d3a8815c6f9804e9f5c6d58d62a4ec5))
* mention unit type in timeout docs ([488c92c](https://github.com/togethercomputer/together-typescript/commit/488c92ca13366d7554db85e163a6504f65900cf6))


### Documentation

* add examples to tsdocs ([64cbec4](https://github.com/togethercomputer/together-typescript/commit/64cbec43bd51f4e4c9bcb41a32aad78657f9a9c3))
* **readme:** fix typo ([0b6aea3](https://github.com/togethercomputer/together-typescript/commit/0b6aea385fe6123df3d2116f80110d37852a0575))


### Refactors

* **types:** replace Record with mapped types ([07b8800](https://github.com/togethercomputer/together-typescript/commit/07b88009b94e6654768c60e1890d1d888746ab6f))

## 0.16.0 (2025-04-28)

Full Changelog: [v0.15.2...v0.16.0](https://github.com/togethercomputer/together-typescript/compare/v0.15.2...v0.16.0)

### Features

* **api:** adds unspecified endpoints ([e35ae54](https://github.com/togethercomputer/together-typescript/commit/e35ae54cf74671bf7e5c8e08bbb53df816ec1502))
* **api:** api update ([889a341](https://github.com/togethercomputer/together-typescript/commit/889a3411038c7393fcbae980422e08def4893317))

## 0.15.2 (2025-04-25)

Full Changelog: [v0.15.1...v0.15.2](https://github.com/togethercomputer/together-typescript/compare/v0.15.1...v0.15.2)

### Features

* **api:** api update ([bf9d03a](https://github.com/togethercomputer/together-typescript/commit/bf9d03adb1c2a740d84ac5354a49cc78edfde151))


### Chores

* **ci:** only use depot for staging repos ([41fd7ce](https://github.com/togethercomputer/together-typescript/commit/41fd7ce4f36b7aa27a89d428af5e5db4a7148b47))
* **ci:** run on more branches and use depot runners ([c20d3fa](https://github.com/togethercomputer/together-typescript/commit/c20d3fa634251b49415362a42350da54fd9be771))

## 0.15.1 (2025-04-22)

Full Changelog: [v0.15.0...v0.15.1](https://github.com/togethercomputer/together-typescript/compare/v0.15.0...v0.15.1)

### Chores

* **ci:** add timeout thresholds for CI jobs ([b642163](https://github.com/togethercomputer/together-typescript/commit/b6421631b6a99a425d8d3cdd4f9a5ff42de3fed0))
* **client:** minor internal fixes ([f3be3a7](https://github.com/togethercomputer/together-typescript/commit/f3be3a7f235f840ac4428e8764844fb3445f3e5d))

## 0.15.0 (2025-04-10)

Full Changelog: [v0.14.0...v0.15.0](https://github.com/togethercomputer/together-typescript/compare/v0.14.0...v0.15.0)

### Features

* **api:** add tci resources ([251a9f3](https://github.com/togethercomputer/together-typescript/commit/251a9f3f909c2f68786f7720614fe9233777bfa0))
* **api:** api update ([ca52efc](https://github.com/togethercomputer/together-typescript/commit/ca52efcadde1f9ef69cb9e8b5eb8e4986c317a1f))


### Chores

* **internal:** reduce CI branch coverage ([27d4cbc](https://github.com/togethercomputer/together-typescript/commit/27d4cbc81033d911db2eba3929097d0e4bdbe347))
* **internal:** upload builds and expand CI branch coverage ([#171](https://github.com/togethercomputer/together-typescript/issues/171)) ([3970fad](https://github.com/togethercomputer/together-typescript/commit/3970fad271402363a2e24a4c8ddeca638252d554))

## 0.14.0 (2025-04-08)

Full Changelog: [v0.13.0...v0.14.0](https://github.com/togethercomputer/together-typescript/compare/v0.13.0...v0.14.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#148](https://github.com/togethercomputer/together-typescript/issues/148)) ([aafb225](https://github.com/togethercomputer/together-typescript/commit/aafb2251319376f40324b676dfd272bf8e3a8416))
* **api:** api update ([#136](https://github.com/togethercomputer/together-typescript/issues/136)) ([cd07485](https://github.com/togethercomputer/together-typescript/commit/cd074853348eadc64b21b3cda783a1eae34a23ae))
* **api:** api update ([#138](https://github.com/togethercomputer/together-typescript/issues/138)) ([cd66985](https://github.com/togethercomputer/together-typescript/commit/cd669851bda96a56bc86efa51e7efa3ce2902205))
* **api:** api update ([#140](https://github.com/togethercomputer/together-typescript/issues/140)) ([8888c48](https://github.com/togethercomputer/together-typescript/commit/8888c485bdb83d16cafe049a279c19bd632c9d77))
* **api:** api update ([#143](https://github.com/togethercomputer/together-typescript/issues/143)) ([ff3a2c8](https://github.com/togethercomputer/together-typescript/commit/ff3a2c8f0ac35db9e0a9c867e400ad610d2defac))
* **api:** api update ([#146](https://github.com/togethercomputer/together-typescript/issues/146)) ([41c0772](https://github.com/togethercomputer/together-typescript/commit/41c0772603ec2e0847bddc488cdfe47aa893afa2))
* **api:** api update ([#147](https://github.com/togethercomputer/together-typescript/issues/147)) ([dad2489](https://github.com/togethercomputer/together-typescript/commit/dad2489e736184c254d628b83adaa247e92318eb))
* **api:** api update ([#150](https://github.com/togethercomputer/together-typescript/issues/150)) ([18522ad](https://github.com/togethercomputer/together-typescript/commit/18522ad1f330658515aa6456e64ec0fef9b2c7b0))
* **api:** api update ([#151](https://github.com/togethercomputer/together-typescript/issues/151)) ([e5d913f](https://github.com/togethercomputer/together-typescript/commit/e5d913fdd3d4ee2a0b85bba53fdf34704e7b909e))
* **api:** api update ([#158](https://github.com/togethercomputer/together-typescript/issues/158)) ([c76b305](https://github.com/togethercomputer/together-typescript/commit/c76b305e11906a73aff4fc1c588894a0d4c514d9))
* **api:** api update ([#161](https://github.com/togethercomputer/together-typescript/issues/161)) ([7e41f35](https://github.com/togethercomputer/together-typescript/commit/7e41f35cbf2eba4efe3fcdbf8dc561202912c06c))
* **api:** api update ([#168](https://github.com/togethercomputer/together-typescript/issues/168)) ([7a621bb](https://github.com/togethercomputer/together-typescript/commit/7a621bbd3d9ced333133d69ad727528a6716d52e))
* **client:** accept RFC6838 JSON content types ([#149](https://github.com/togethercomputer/together-typescript/issues/149)) ([76e59e3](https://github.com/togethercomputer/together-typescript/commit/76e59e3da4e58bd1a3c9a83d5e7a7093d28edba8))
* **client:** send `X-Stainless-Timeout` header ([#137](https://github.com/togethercomputer/together-typescript/issues/137)) ([9f25474](https://github.com/togethercomputer/together-typescript/commit/9f2547457ac4f70312656f63bcfc5b019f8bc3c0))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#166](https://github.com/togethercomputer/together-typescript/issues/166)) ([a5e4817](https://github.com/togethercomputer/together-typescript/commit/a5e4817a0a0fb6155b90183c659fb2983311c4e7))
* avoid type error in certain environments ([#157](https://github.com/togethercomputer/together-typescript/issues/157)) ([842cddd](https://github.com/togethercomputer/together-typescript/commit/842cddd95337625c1e6db7fe7600e9b57a4d2c2c))
* **client:** correct type to enum ([#154](https://github.com/togethercomputer/together-typescript/issues/154)) ([5064a2c](https://github.com/togethercomputer/together-typescript/commit/5064a2c30a67d2e7bb345cf74c14dfe8994b928c))
* **client:** fix export map for index exports ([#141](https://github.com/togethercomputer/together-typescript/issues/141)) ([4d746d0](https://github.com/togethercomputer/together-typescript/commit/4d746d0762cfd523ee3a21872b5201c2d4733422))
* **client:** send `X-Stainless-Timeout` in seconds ([#164](https://github.com/togethercomputer/together-typescript/issues/164)) ([ae40ee1](https://github.com/togethercomputer/together-typescript/commit/ae40ee1836dc2011a4c2bd048aa6e45e46674e15))
* correctly decode multi-byte characters over multiple chunks ([#139](https://github.com/togethercomputer/together-typescript/issues/139)) ([8c047b7](https://github.com/togethercomputer/together-typescript/commit/8c047b72ac932d432ce0d0ea51d666ea78d27e33))
* **exports:** ensure resource imports don't require /index ([#153](https://github.com/togethercomputer/together-typescript/issues/153)) ([80e61a5](https://github.com/togethercomputer/together-typescript/commit/80e61a52b4165060153c2e91a550e1808d12470d))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#160](https://github.com/togethercomputer/together-typescript/issues/160)) ([8071f95](https://github.com/togethercomputer/together-typescript/commit/8071f95d7948e313b31b1e40f5fa4192f0e9ee77))
* **mcp:** remove unused tools.ts ([#167](https://github.com/togethercomputer/together-typescript/issues/167)) ([ba0ad0c](https://github.com/togethercomputer/together-typescript/commit/ba0ad0ccca1f248845f67c9d18ef0204aa905eac))
* optimize sse chunk reading off-by-one error ([#142](https://github.com/togethercomputer/together-typescript/issues/142)) ([7f1a4f3](https://github.com/togethercomputer/together-typescript/commit/7f1a4f3f4a141b31907ed63104c42f641f6da6ab))
* skip invalid fine-tune test ([#163](https://github.com/togethercomputer/together-typescript/issues/163)) ([888c490](https://github.com/togethercomputer/together-typescript/commit/888c4902d1b1a15b1b5d09b278c9046e53542ae2))
* **tests:** correctly skip create fine tune tests ([#170](https://github.com/togethercomputer/together-typescript/issues/170)) ([ce62406](https://github.com/togethercomputer/together-typescript/commit/ce624061af8244782ce8b22b0a32148c5476a2da))
* **tests:** skip invalid test ([#134](https://github.com/togethercomputer/together-typescript/issues/134)) ([229822f](https://github.com/togethercomputer/together-typescript/commit/229822fa0355888519b037a66752e3518fc82441))


### Chores

* **client:** expose headers on some streaming errors ([#159](https://github.com/togethercomputer/together-typescript/issues/159)) ([be1dd4a](https://github.com/togethercomputer/together-typescript/commit/be1dd4a4bfa5beac6640ebd0657882c969e12006))
* **exports:** cleaner resource index imports ([#155](https://github.com/togethercomputer/together-typescript/issues/155)) ([086093a](https://github.com/togethercomputer/together-typescript/commit/086093a826c19dfc7ae31c36f64d5850ecb854f7))
* **exports:** stop using path fallbacks ([#156](https://github.com/togethercomputer/together-typescript/issues/156)) ([e0a4623](https://github.com/togethercomputer/together-typescript/commit/e0a46237e3853682731a67bd0dfb7b5394f326a0))
* **internal:** add aliases for Record and Array ([#165](https://github.com/togethercomputer/together-typescript/issues/165)) ([2c53021](https://github.com/togethercomputer/together-typescript/commit/2c53021235376d3250c9314ce873573462fca909))
* **internal:** fix devcontainers setup ([#144](https://github.com/togethercomputer/together-typescript/issues/144)) ([e9bd176](https://github.com/togethercomputer/together-typescript/commit/e9bd176fa213090ed882028dd66b6a38acd2982f))
* **internal:** remove extra empty newlines ([#152](https://github.com/togethercomputer/together-typescript/issues/152)) ([a161ee7](https://github.com/togethercomputer/together-typescript/commit/a161ee794c45ee6c090c62a77f5d1a2fe70b5eb8))
* **tests:** improve enum examples ([#169](https://github.com/togethercomputer/together-typescript/issues/169)) ([616acc8](https://github.com/togethercomputer/together-typescript/commit/616acc840a68ef24e3acbc399fbb3dbba7c7f238))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#145](https://github.com/togethercomputer/together-typescript/issues/145)) ([511a9de](https://github.com/togethercomputer/together-typescript/commit/511a9de994cc611b3593412eda385d3e73c01d15))

## 0.13.0 (2025-01-27)

Full Changelog: [v0.12.0...v0.13.0](https://github.com/togethercomputer/together-typescript/compare/v0.12.0...v0.13.0)

### Features

* **api:** api update ([#131](https://github.com/togethercomputer/together-typescript/issues/131)) ([990900a](https://github.com/togethercomputer/together-typescript/commit/990900acb435aa2eb2fdcbc267b5de662ded7aa2))

## 0.12.0 (2025-01-23)

Full Changelog: [v0.11.2...v0.12.0](https://github.com/togethercomputer/together-typescript/compare/v0.11.2...v0.12.0)

### Features

* **api:** add audio create method ([#127](https://github.com/togethercomputer/together-typescript/issues/127)) ([2fd7cc5](https://github.com/togethercomputer/together-typescript/commit/2fd7cc5bc91493d04a13a9c7c36d846f55681011))

## 0.11.2 (2025-01-23)

Full Changelog: [v0.11.1...v0.11.2](https://github.com/togethercomputer/together-typescript/compare/v0.11.1...v0.11.2)

### Bug Fixes

* send correct Accept header for certain endpoints ([#122](https://github.com/togethercomputer/together-typescript/issues/122)) ([29223b0](https://github.com/togethercomputer/together-typescript/commit/29223b057f662966fb0fc61916425d9891daeb3c))


### Chores

* **internal:** add test ([#124](https://github.com/togethercomputer/together-typescript/issues/124)) ([2fe6bfd](https://github.com/togethercomputer/together-typescript/commit/2fe6bfd92da5df5f8c9356b404144bac9b11e91a))
* **internal:** codegen related update ([#120](https://github.com/togethercomputer/together-typescript/issues/120)) ([b2313c5](https://github.com/togethercomputer/together-typescript/commit/b2313c5e73e6e294fc2dc61246b0da35bedb1c10))
* **internal:** minor restructuring ([#125](https://github.com/togethercomputer/together-typescript/issues/125)) ([c03ed37](https://github.com/togethercomputer/together-typescript/commit/c03ed37be78fa929a365a1531ded746839c72a12))
* **types:** add `| undefined` to client options properties ([#123](https://github.com/togethercomputer/together-typescript/issues/123)) ([7f6162e](https://github.com/togethercomputer/together-typescript/commit/7f6162e7c7dbdfa4fa80cd4e32db543b3adf2a2c))

## 0.11.1 (2025-01-06)

Full Changelog: [v0.11.0...v0.11.1](https://github.com/togethercomputer/together-typescript/compare/v0.11.0...v0.11.1)

### Chores

* **internal:** fix lint errors ([194e247](https://github.com/togethercomputer/together-typescript/commit/194e24738c3a9946eeb390ea6e2eade1a14f5f2d))

## 0.11.0 (2025-01-02)

Full Changelog: [v0.10.0...v0.11.0](https://github.com/togethercomputer/together-typescript/compare/v0.10.0...v0.11.0)

### Features

* added messages format check ([d2fa4db](https://github.com/togethercomputer/together-typescript/commit/d2fa4dbdb977bea56053cd148f3b0406c9081682))
* **api:** add models for chat completion structured message types ([#107](https://github.com/togethercomputer/together-typescript/issues/107)) ([d32c311](https://github.com/togethercomputer/together-typescript/commit/d32c3110fd50470cbb563bfa5213fb6bf831ecc6))
* **api:** api update ([#99](https://github.com/togethercomputer/together-typescript/issues/99)) ([dea8e5c](https://github.com/togethercomputer/together-typescript/commit/dea8e5cc8411e74082da8ef722a05ae5053cd67e))
* **internal:** make git install file structure match npm ([#101](https://github.com/togethercomputer/together-typescript/issues/101)) ([28e49f0](https://github.com/togethercomputer/together-typescript/commit/28e49f0a30df60c7bf22b5b93bf613a335a39bf6))


### Bug Fixes

* **client:** normalize method ([#112](https://github.com/togethercomputer/together-typescript/issues/112)) ([fa1095f](https://github.com/togethercomputer/together-typescript/commit/fa1095fc1486808bd6e1755bdb38cd90c33b9ad1))


### Chores

* **internal:** bump cross-spawn to v7.0.6 ([#106](https://github.com/togethercomputer/together-typescript/issues/106)) ([0ef9509](https://github.com/togethercomputer/together-typescript/commit/0ef95095c9fad01f6c2f234256577e62bf9ce4b3))
* **internal:** codegen related update ([#114](https://github.com/togethercomputer/together-typescript/issues/114)) ([4f49cd8](https://github.com/togethercomputer/together-typescript/commit/4f49cd827e78be83c7e2a2aeabd7b8cdb876158f))
* **internal:** fix some typos ([#111](https://github.com/togethercomputer/together-typescript/issues/111)) ([792be82](https://github.com/togethercomputer/together-typescript/commit/792be82a89bdcf7756fb3d76581b1280476f679c))
* **internal:** remove unnecessary getRequestClient function ([#103](https://github.com/togethercomputer/together-typescript/issues/103)) ([3acec90](https://github.com/togethercomputer/together-typescript/commit/3acec909ed2b726b202d7545815dc1c82c4f2f1d))
* **internal:** update isAbsoluteURL ([#110](https://github.com/togethercomputer/together-typescript/issues/110)) ([140ecda](https://github.com/togethercomputer/together-typescript/commit/140ecdaf09b29e2985842908e48fcd59a65fb35b))
* **types:** nicer error class types + jsdocs ([#109](https://github.com/togethercomputer/together-typescript/issues/109)) ([5517ee0](https://github.com/togethercomputer/together-typescript/commit/5517ee060871b4f98dce6c7b396efb948329dfae))


### Documentation

* minor formatting changes ([#113](https://github.com/togethercomputer/together-typescript/issues/113)) ([18f6773](https://github.com/togethercomputer/together-typescript/commit/18f67732cdb061925e4fbfd2fe1f0a7d53c5c446))

## 0.10.0 (2024-11-27)

Full Changelog: [v0.9.0...v0.10.0](https://github.com/togethercomputer/together-typescript/compare/v0.9.0...v0.10.0)

### Features

* **api:** api update ([#89](https://github.com/togethercomputer/together-typescript/issues/89)) ([57feb67](https://github.com/togethercomputer/together-typescript/commit/57feb67b12cf751f61c99efbe4307f095171e4c6))
* **api:** api update ([#92](https://github.com/togethercomputer/together-typescript/issues/92)) ([175e523](https://github.com/togethercomputer/together-typescript/commit/175e523d9f0866ffb7f1caac7706a548beb90edd))
* **api:** api update ([#95](https://github.com/togethercomputer/together-typescript/issues/95)) ([b54fc92](https://github.com/togethercomputer/together-typescript/commit/b54fc92dd5a57911f8929e10ba9f4b14f21573fb))
* **api:** api update ([#96](https://github.com/togethercomputer/together-typescript/issues/96)) ([794ee52](https://github.com/togethercomputer/together-typescript/commit/794ee52c0b8158e0ac1c6c8cc7cdb20efe878164))
* **api:** api update ([#97](https://github.com/togethercomputer/together-typescript/issues/97)) ([8f485c9](https://github.com/togethercomputer/together-typescript/commit/8f485c99096c992563ba9ab1c3b48164c745ccc2))


### Bug Fixes

* **internal:** fix import ([be8bc88](https://github.com/togethercomputer/together-typescript/commit/be8bc881e221419d866e15b09d5db865c063404a))


### Chores

* **internal:** version bump ([#83](https://github.com/togethercomputer/together-typescript/issues/83)) ([2e9673e](https://github.com/togethercomputer/together-typescript/commit/2e9673ea076868d839da23475010ff9b788b46b2))
* rebuild project due to codegen change ([#87](https://github.com/togethercomputer/together-typescript/issues/87)) ([800fd5a](https://github.com/togethercomputer/together-typescript/commit/800fd5ac7f9a3583af76f53f4252cd7b903c502b))
* rebuild project due to codegen change ([#88](https://github.com/togethercomputer/together-typescript/issues/88)) ([7db117f](https://github.com/togethercomputer/together-typescript/commit/7db117f28947071b3a70367dbcb3e33ec9e3726a))
* rebuild project due to codegen change ([#90](https://github.com/togethercomputer/together-typescript/issues/90)) ([7d5a9b4](https://github.com/togethercomputer/together-typescript/commit/7d5a9b4e1cade5623708a7a482dd6378ee9d2e9c))
* rebuild project due to codegen change ([#91](https://github.com/togethercomputer/together-typescript/issues/91)) ([1703fbc](https://github.com/togethercomputer/together-typescript/commit/1703fbc7a85ee7579e98e3f74ff3a859d27cb3c0))
* remove redundant word in comment ([#94](https://github.com/togethercomputer/together-typescript/issues/94)) ([bedbb68](https://github.com/togethercomputer/together-typescript/commit/bedbb684c0a7d6fadabbea07f0bcd124cb1bd180))


### Documentation

* remove suggestion to use `npm` call out ([#93](https://github.com/togethercomputer/together-typescript/issues/93)) ([52bdca6](https://github.com/togethercomputer/together-typescript/commit/52bdca6a299965f96b65082d2dcff62a3771e1b4))

## 0.9.0 (2024-11-05)

Full Changelog: [v0.8.0...v0.9.0](https://github.com/togethercomputer/together-typescript/compare/v0.8.0...v0.9.0)

### Features

* adding upload API as a helper function. Need to figure out how to make it part of Together.files package ([59efebe](https://github.com/togethercomputer/together-typescript/commit/59efebeea30bd389ecfc8dad484ce085e1efe412))
* fixed linting error ([045f8dd](https://github.com/togethercomputer/together-typescript/commit/045f8dd9bdfd447d8663a5691096fea1e27adc5c))
* removed ([d588157](https://github.com/togethercomputer/together-typescript/commit/d588157eba3f77dc68313b17aba3a3eefa2457ca))
* updated yarn.lock ([6487474](https://github.com/togethercomputer/together-typescript/commit/6487474d24a1bc13416269bef0b36c11b424b9ef))
* yarn lock change ([b8ce4ae](https://github.com/togethercomputer/together-typescript/commit/b8ce4ae8312789037122580f5408a72f21189d24))

## 0.8.0 (2024-10-30)

Full Changelog: [v0.7.0...v0.8.0](https://github.com/togethercomputer/together-typescript/compare/v0.7.0...v0.8.0)

### Features

* **api:** api update ([#76](https://github.com/togethercomputer/together-typescript/issues/76)) ([26b7743](https://github.com/togethercomputer/together-typescript/commit/26b7743e989cc1239740ac99d03e2ec157da9905))
* **api:** api update ([#79](https://github.com/togethercomputer/together-typescript/issues/79)) ([eb34c86](https://github.com/togethercomputer/together-typescript/commit/eb34c86204618eb7f7bf8f4aed16af97a221dae2))


### Documentation

* **api:** Add back in required readme field ([#78](https://github.com/togethercomputer/together-typescript/issues/78)) ([74b457f](https://github.com/togethercomputer/together-typescript/commit/74b457f6a98046feb0805f3c8471c800fc6fc7b0))

## 0.7.0 (2024-10-23)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/togethercomputer/together-typescript/compare/v0.6.0...v0.7.0)

### Features

* **api:** api update ([#70](https://github.com/togethercomputer/together-typescript/issues/70)) ([6157f8c](https://github.com/togethercomputer/together-typescript/commit/6157f8c9ecf86a2574dc146a4ee0877857d58080))
* **api:** api update ([#72](https://github.com/togethercomputer/together-typescript/issues/72)) ([b400821](https://github.com/togethercomputer/together-typescript/commit/b400821dc58a2436ba4bdc27517aa3f3670a217e))
* **api:** api update ([#73](https://github.com/togethercomputer/together-typescript/issues/73)) ([e5d1b6b](https://github.com/togethercomputer/together-typescript/commit/e5d1b6bae33530b252ecedab7d1f4097447fcb30))
* **api:** api update ([#74](https://github.com/togethercomputer/together-typescript/issues/74)) ([155b212](https://github.com/togethercomputer/together-typescript/commit/155b2120e8c99bb02b5dbeb514f4e9502fa7840d))

## 0.6.0 (2024-10-22)

Full Changelog: [v0.6.0-alpha.8...v0.6.0](https://github.com/togethercomputer/together-typescript/compare/v0.6.0-alpha.8...v0.6.0)

### Features

* **api:** api update ([#67](https://github.com/togethercomputer/together-typescript/issues/67)) ([21e06d1](https://github.com/togethercomputer/together-typescript/commit/21e06d173bd0eda660241ebc54c3308b21c9b4ba))
* **api:** OpenAPI spec update via Stainless API ([#55](https://github.com/togethercomputer/together-typescript/issues/55)) ([ebe1c62](https://github.com/togethercomputer/together-typescript/commit/ebe1c628baac31d27aca53ef23531e8585b3c7af))
* **api:** OpenAPI spec update via Stainless API ([#62](https://github.com/togethercomputer/together-typescript/issues/62)) ([b6af173](https://github.com/togethercomputer/together-typescript/commit/b6af17302473f7ee3ed8eea2671d6920f6a6edc2))


### Bug Fixes

* **client:** correct File construction from node-fetch Responses ([#54](https://github.com/togethercomputer/together-typescript/issues/54)) ([e1d5c6b](https://github.com/togethercomputer/together-typescript/commit/e1d5c6bd0ef8985a9525a82a31f2ac3385e6e2bd))
* **errors:** pass message through to APIConnectionError ([#60](https://github.com/togethercomputer/together-typescript/issues/60)) ([0d0ede4](https://github.com/togethercomputer/together-typescript/commit/0d0ede46e8e34c64a65fe79790cecfca3277e6b3))
* **uploads:** avoid making redundant memory copies ([#57](https://github.com/togethercomputer/together-typescript/issues/57)) ([e88f744](https://github.com/togethercomputer/together-typescript/commit/e88f7449116fa4237a9601e1fd87f939b6678041))


### Chores

* better object fallback behaviour for casting errors ([#61](https://github.com/togethercomputer/together-typescript/issues/61)) ([bad19ff](https://github.com/togethercomputer/together-typescript/commit/bad19ffd41ab7223845b9763346e49e5364d8182))
* **ci:** install deps via ./script/bootstrap ([#52](https://github.com/togethercomputer/together-typescript/issues/52)) ([a22842a](https://github.com/togethercomputer/together-typescript/commit/a22842aaff23412ff69e4aea0ff99eb16bd8408c))
* **internal:** codegen related update ([#56](https://github.com/togethercomputer/together-typescript/issues/56)) ([8fd1782](https://github.com/togethercomputer/together-typescript/commit/8fd17821e4ac71372deebc1c08bea38735dbd1e7))
* **internal:** codegen related update ([#58](https://github.com/togethercomputer/together-typescript/issues/58)) ([e5b82e7](https://github.com/togethercomputer/together-typescript/commit/e5b82e7097f75420acf5b7c3d952ddfbd05a3832))
* **internal:** codegen related update ([#59](https://github.com/togethercomputer/together-typescript/issues/59)) ([962541e](https://github.com/togethercomputer/together-typescript/commit/962541e18d35c6c91e8710544ffa44693be7c2c6))
* **internal:** codegen related update ([#63](https://github.com/togethercomputer/together-typescript/issues/63)) ([6093fb9](https://github.com/togethercomputer/together-typescript/commit/6093fb9410ddc0580ffd7634e73cdb4075d94050))
* **internal:** move LineDecoder to a separate file ([#64](https://github.com/togethercomputer/together-typescript/issues/64)) ([9a5999d](https://github.com/togethercomputer/together-typescript/commit/9a5999d5fcd0dd92b18fd8a31e5db7c5f1eab326))
* **internal:** pass props through internal parser ([#65](https://github.com/togethercomputer/together-typescript/issues/65)) ([162bc3c](https://github.com/togethercomputer/together-typescript/commit/162bc3c9a02d7c0c878a6c14fc9d711c90282e89))

## 0.6.0-alpha.8 (2024-08-29)

Full Changelog: [v0.6.0-alpha.7...v0.6.0-alpha.8](https://github.com/togethercomputer/together-typescript/compare/v0.6.0-alpha.7...v0.6.0-alpha.8)

### Features

* **api:** OpenAPI spec update via Stainless API ([#48](https://github.com/togethercomputer/together-typescript/issues/48)) ([e382b4a](https://github.com/togethercomputer/together-typescript/commit/e382b4a8563479b5a0843d7613809454b5b9a16f))


### Chores

* run tsc as part of lint script ([#50](https://github.com/togethercomputer/together-typescript/issues/50)) ([3611348](https://github.com/togethercomputer/together-typescript/commit/361134866e071d7f02bf1a3377166a4a82e08191))

## 0.6.0-alpha.7 (2024-08-28)

Full Changelog: [v0.6.0-alpha.6...v0.6.0-alpha.7](https://github.com/togethercomputer/together-typescript/compare/v0.6.0-alpha.6...v0.6.0-alpha.7)

### Features

* **api:** OpenAPI spec update via Stainless API ([#44](https://github.com/togethercomputer/together-typescript/issues/44)) ([5fbcdd8](https://github.com/togethercomputer/together-typescript/commit/5fbcdd8eb359ccd8f0bceb34d8d424c96e3e4268))


### Bug Fixes

* chat completion streaming when enabling logprobs ([cad72ef](https://github.com/togethercomputer/together-typescript/commit/cad72ef78213cbaa4497c7358b65e94c4b15f99a))


### Chores

* **ci:** check for build errors ([#46](https://github.com/togethercomputer/together-typescript/issues/46)) ([ef2541c](https://github.com/togethercomputer/together-typescript/commit/ef2541c70dfee841373dfe16a5c866ebcf382822))

## 0.6.0-alpha.6 (2024-08-26)

Full Changelog: [v0.6.0-alpha.5...v0.6.0-alpha.6](https://github.com/togethercomputer/together-typescript/compare/v0.6.0-alpha.5...v0.6.0-alpha.6)

### Chores

* **internal:** codegen related update ([#41](https://github.com/togethercomputer/together-typescript/issues/41)) ([3776c8d](https://github.com/togethercomputer/together-typescript/commit/3776c8d661824afa6dc33a1af725eb105e38fff3))

## 0.6.0-alpha.5 (2024-08-20)

Full Changelog: [v0.6.0-alpha.4...v0.6.0-alpha.5](https://github.com/togethercomputer/together-typescript/compare/v0.6.0-alpha.4...v0.6.0-alpha.5)

### Features

* **api:** manual updates ([#31](https://github.com/togethercomputer/together-typescript/issues/31)) ([52c8005](https://github.com/togethercomputer/together-typescript/commit/52c800544043060963bf09ef10d3596d3855a86e))
* **api:** OpenAPI spec update via Stainless API ([#28](https://github.com/togethercomputer/together-typescript/issues/28)) ([9544a3f](https://github.com/togethercomputer/together-typescript/commit/9544a3f961b816fd59338db99b5f9b499dbfe832))
* **api:** OpenAPI spec update via Stainless API ([#36](https://github.com/togethercomputer/together-typescript/issues/36)) ([0154ccf](https://github.com/togethercomputer/together-typescript/commit/0154ccf0758b9ec9117b5a399eade3e51f49c5fd))
* **api:** OpenAPI spec update via Stainless API ([#39](https://github.com/togethercomputer/together-typescript/issues/39)) ([a141abb](https://github.com/togethercomputer/together-typescript/commit/a141abb2184e99a291eb5ea634fda71fca85f47b))


### Chores

* **ci:** bump prism mock server version ([#35](https://github.com/togethercomputer/together-typescript/issues/35)) ([2723c30](https://github.com/togethercomputer/together-typescript/commit/2723c30cd88f69fb77442faeb8a316bf1c5cde88))
* **ci:** minor changes ([#34](https://github.com/togethercomputer/together-typescript/issues/34)) ([54b4da5](https://github.com/togethercomputer/together-typescript/commit/54b4da54aeec098d154486f09ba52f6e8bc3f715))
* **examples:** minor formatting changes ([#38](https://github.com/togethercomputer/together-typescript/issues/38)) ([35f5465](https://github.com/togethercomputer/together-typescript/commit/35f546552c433af8d518db0b44f7fcd473c02eab))
* force eslint to use non flat config ([#33](https://github.com/togethercomputer/together-typescript/issues/33)) ([a327432](https://github.com/togethercomputer/together-typescript/commit/a327432973bc4f245ec272dcd58a7d0a4f117c09))
* **internal:** codegen related update ([#32](https://github.com/togethercomputer/together-typescript/issues/32)) ([edd1691](https://github.com/togethercomputer/together-typescript/commit/edd16911c877b06679f6f7759486e2ed442c94c5))
* **internal:** codegen related update ([#37](https://github.com/togethercomputer/together-typescript/issues/37)) ([12be697](https://github.com/togethercomputer/together-typescript/commit/12be697f897f91ce94edd5ec5fca6abe236a5135))

## 0.6.0-alpha.4 (2024-07-16)

Full Changelog: [v0.6.0-alpha.3...v0.6.0-alpha.4](https://github.com/togethercomputer/together-typescript/compare/v0.6.0-alpha.3...v0.6.0-alpha.4)

### Features

* **api:** manual updates ([#22](https://github.com/togethercomputer/together-typescript/issues/22)) ([ede606f](https://github.com/togethercomputer/together-typescript/commit/ede606f59f84e225cc6e799cbbee0ea195fbb4f6))
* **api:** OpenAPI spec update via Stainless API ([#18](https://github.com/togethercomputer/together-typescript/issues/18)) ([73499c2](https://github.com/togethercomputer/together-typescript/commit/73499c245624ee60f1f6147b208a0e426cf8a182))
* **api:** OpenAPI spec update via Stainless API ([#19](https://github.com/togethercomputer/together-typescript/issues/19)) ([9158220](https://github.com/togethercomputer/together-typescript/commit/9158220e7658b8998f45505a1d8c5652020f72f7))
* **api:** OpenAPI spec update via Stainless API ([#20](https://github.com/togethercomputer/together-typescript/issues/20)) ([debd949](https://github.com/togethercomputer/together-typescript/commit/debd949c0e86b7154fde3bcf951e2e7d1c25ba7a))
* **api:** OpenAPI spec update via Stainless API ([#23](https://github.com/togethercomputer/together-typescript/issues/23)) ([1b03e3f](https://github.com/togethercomputer/together-typescript/commit/1b03e3f15f70fce8a6be6b849c48b76feff6ac6a))
* **api:** OpenAPI spec update via Stainless API ([#24](https://github.com/togethercomputer/together-typescript/issues/24)) ([e28fb4b](https://github.com/togethercomputer/together-typescript/commit/e28fb4b688e6919e941349a7a5ee838543af20ef))
* **api:** OpenAPI spec update via Stainless API ([#25](https://github.com/togethercomputer/together-typescript/issues/25)) ([24a4e34](https://github.com/togethercomputer/together-typescript/commit/24a4e341c39fe768b60f912a94be1ad9e170faed))
* **api:** OpenAPI spec update via Stainless API ([#26](https://github.com/togethercomputer/together-typescript/issues/26)) ([a041bff](https://github.com/togethercomputer/together-typescript/commit/a041bff299477b131239591e977b98cdc793442f))


### Bug Fixes

* **client:** fix auth via Bearer token ([#21](https://github.com/togethercomputer/together-typescript/issues/21)) ([c001b61](https://github.com/togethercomputer/together-typescript/commit/c001b61b4ecdec0705909e1aba6380937dfb58cf))


### Chores

* update SDK settings ([#16](https://github.com/togethercomputer/together-typescript/issues/16)) ([88af203](https://github.com/togethercomputer/together-typescript/commit/88af20394bc6befa762f6121ba70ca04c7eeb088))

## 0.6.0-alpha.3 (2024-05-29)

Full Changelog: [v0.6.0-alpha.2...v0.6.0-alpha.3](https://github.com/togethercomputer/together-typescript/compare/v0.6.0-alpha.2...v0.6.0-alpha.3)

### Features

* **api:** rename api key ([#14](https://github.com/togethercomputer/together-typescript/issues/14)) ([c9d1f45](https://github.com/togethercomputer/together-typescript/commit/c9d1f451bd170295353f4484f1b271f7f2892602))


### Chores

* **internal:** version bump ([#12](https://github.com/togethercomputer/together-typescript/issues/12)) ([a312c3b](https://github.com/togethercomputer/together-typescript/commit/a312c3b1e52be5983754228b1509c247edcf2795))

## 0.6.0-alpha.2 (2024-05-27)

Full Changelog: [v0.6.0-alpha.1...v0.6.0-alpha.2](https://github.com/togethercomputer/together-typescript/compare/v0.6.0-alpha.1...v0.6.0-alpha.2)

### Features

* **api:** OpenAPI spec update via Stainless API ([#10](https://github.com/togethercomputer/together-typescript/issues/10)) ([8e9cec9](https://github.com/togethercomputer/together-typescript/commit/8e9cec913cebef2362d7727032b15ca0a19b8be1))

## 0.6.0-alpha.1 (2024-05-24)

Full Changelog: [v0.1.0-alpha.1...v0.6.0-alpha.1](https://github.com/togethercomputer/together-typescript/compare/v0.1.0-alpha.1...v0.6.0-alpha.1)

### Features

* **api:** manual updates ([#8](https://github.com/togethercomputer/together-typescript/issues/8)) ([3ce9a74](https://github.com/togethercomputer/together-typescript/commit/3ce9a747725b5f5c2c08df6d3402a01c93614e76))

## 0.1.0-alpha.1 (2024-05-20)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/togethercomputer/together-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** Config update for pstern-sl/dev ([50330bc](https://github.com/togethercomputer/together-typescript/commit/50330bc2c5da638c948219558182f1aff9a21111))
* **api:** manual updates ([d3d60df](https://github.com/togethercomputer/together-typescript/commit/d3d60dfbc094879af69fda21d58f0d3147ef914d))
* **api:** OpenAPI spec update via Stainless API ([c7b048d](https://github.com/togethercomputer/together-typescript/commit/c7b048d7b1965141f210550fef7eb3493a6eb5f4))
* **api:** OpenAPI spec update via Stainless API ([f2eba5e](https://github.com/togethercomputer/together-typescript/commit/f2eba5e21b4a6e0e1d9b312662393e4828a531e4))
* **api:** OpenAPI spec update via Stainless API ([9d72c93](https://github.com/togethercomputer/together-typescript/commit/9d72c93c6698c1985867eb382db0c0f4b81dd605))
* **api:** OpenAPI spec update via Stainless API ([d5f7089](https://github.com/togethercomputer/together-typescript/commit/d5f7089b870c0faa7c04b042cdd24173b6e012dc))
* **api:** OpenAPI spec update via Stainless API ([2f777f5](https://github.com/togethercomputer/together-typescript/commit/2f777f5f9de1e821ee5b9fd0706e4e02c4dc63a3))
* **api:** OpenAPI spec update via Stainless API ([6b6d656](https://github.com/togethercomputer/together-typescript/commit/6b6d6564f3b98d1cb48bc488085210b1f7ddaaaf))
* **api:** OpenAPI spec update via Stainless API ([2099de1](https://github.com/togethercomputer/together-typescript/commit/2099de109f0d798ce48ec636249f557a9bdc6579))
* **api:** OpenAPI spec update via Stainless API ([#3](https://github.com/togethercomputer/together-typescript/issues/3)) ([6ab0237](https://github.com/togethercomputer/together-typescript/commit/6ab02377ad427723c9d9ea53cf7bd0c772dbe2df))
* **api:** OpenAPI spec update via Stainless API ([#5](https://github.com/togethercomputer/together-typescript/issues/5)) ([2cea8b5](https://github.com/togethercomputer/together-typescript/commit/2cea8b5114f1071ca29df793a5ee2b0c7d4774ce))
* **api:** update via SDK Studio ([78442fc](https://github.com/togethercomputer/together-typescript/commit/78442fca117034ecaea5fdfddf9b24d9cf71978a))
* **api:** update via SDK Studio ([8bb8235](https://github.com/togethercomputer/together-typescript/commit/8bb823563bc88ae7bfb22e99ac939b95e6c61e39))
* **api:** update via SDK Studio ([4edc4ed](https://github.com/togethercomputer/together-typescript/commit/4edc4edd1dd7d32dcf6ff3afae908097dcb647b7))
* **api:** update via SDK Studio ([6792cd8](https://github.com/togethercomputer/together-typescript/commit/6792cd88e8ec9064bd32ff8973238eafe790dfcc))
* **api:** update via SDK Studio ([0e5a965](https://github.com/togethercomputer/together-typescript/commit/0e5a96559e99ffb2da1add0fe873b9db0614fb6d))
* **api:** update via SDK Studio ([b208042](https://github.com/togethercomputer/together-typescript/commit/b20804268af988611db28da6afae730712958873))
* **api:** update via SDK Studio ([e705a6a](https://github.com/togethercomputer/together-typescript/commit/e705a6addd3f99b56817ab4dc11021bd359f9348))
* **api:** update via SDK Studio ([8801a8f](https://github.com/togethercomputer/together-typescript/commit/8801a8f617e5bd32685ae17e13fc4c65bf7cdd4b))
* **api:** update via SDK Studio ([3c8036e](https://github.com/togethercomputer/together-typescript/commit/3c8036ef7009b87a6b64697c34b2d102083027a9))
* **api:** update via SDK Studio ([5f63392](https://github.com/togethercomputer/together-typescript/commit/5f63392d36fad5de5f6b405059fd4baf32f17a9f))
* **api:** update via SDK Studio ([afbb5d9](https://github.com/togethercomputer/together-typescript/commit/afbb5d99eb68815a2e7d4605db60bd24a62ba55d))
* **api:** update via SDK Studio ([c89406c](https://github.com/togethercomputer/together-typescript/commit/c89406c20e264fa1df9609f777023416f5ed600c))
* **api:** update via SDK Studio ([1a01c5f](https://github.com/togethercomputer/together-typescript/commit/1a01c5f368ec4fc91051813e9f33d34635436503))
* **api:** update via SDK Studio ([97762a6](https://github.com/togethercomputer/together-typescript/commit/97762a661940c4e80e620a9ab162af78889e2090))
* **api:** update via SDK Studio ([644232d](https://github.com/togethercomputer/together-typescript/commit/644232dc7c9f28e95f16220a4ba21d31ca5826dd))
* **api:** update via SDK Studio ([4af7da5](https://github.com/togethercomputer/together-typescript/commit/4af7da5d4134b0299e11fc8458f438789684f78b))
* **api:** update via SDK Studio ([7ffe18f](https://github.com/togethercomputer/together-typescript/commit/7ffe18fd3abc362b37aa2f4f7b82529b4896f472))
* **api:** update via SDK Studio ([8eac113](https://github.com/togethercomputer/together-typescript/commit/8eac113748917b70dcdc0623a4d3243f65a49be6))
* **api:** update via SDK Studio ([8b71dad](https://github.com/togethercomputer/together-typescript/commit/8b71dad78f8ba7443b6766c964ec2411ca71dd59))
* **api:** update via SDK Studio ([b873e4b](https://github.com/togethercomputer/together-typescript/commit/b873e4b3ae640c16469d0c85e9860a1d276b0059))
* **api:** update via SDK Studio ([333b4bd](https://github.com/togethercomputer/together-typescript/commit/333b4bdca14067ec7bb197837238cc86c220da31))
* **api:** update via SDK Studio ([19125a0](https://github.com/togethercomputer/together-typescript/commit/19125a048531d03cc334eb11919a01954fa3d252))
* **api:** updates ([3781ee8](https://github.com/togethercomputer/together-typescript/commit/3781ee8ac2e8cf333138899e6982ddfe5c378319))
* update via SDK Studio ([de036f5](https://github.com/togethercomputer/together-typescript/commit/de036f590bcdbec7cc351156b104e75c32060219))
* update via SDK Studio ([913553c](https://github.com/togethercomputer/together-typescript/commit/913553c1e7835bd519e19c68dedaf57e2ed5321a))
* update via SDK Studio ([1716130](https://github.com/togethercomputer/together-typescript/commit/1716130854861f53fae7841ad8e00c1dc7e32e61))
* update via SDK Studio ([fccf615](https://github.com/togethercomputer/together-typescript/commit/fccf615c0da30d502762abde371145f5094c6540))
* update via SDK Studio ([5cb5be4](https://github.com/togethercomputer/together-typescript/commit/5cb5be4089a39c0c8237f5426dc41f1e03c3c3c0))
* update via SDK Studio ([504bc56](https://github.com/togethercomputer/together-typescript/commit/504bc56dd6f34388209e89b9df2808dff49d9124))
* update via SDK Studio ([bca35e9](https://github.com/togethercomputer/together-typescript/commit/bca35e9e867f7adb3367ebe06492f43327924324))
* update via SDK Studio ([d26b5ce](https://github.com/togethercomputer/together-typescript/commit/d26b5ceeee5fbad12ad262e1f9d4d045ba2468e1))


### Chores

* go live ([#1](https://github.com/togethercomputer/together-typescript/issues/1)) ([369e366](https://github.com/togethercomputer/together-typescript/commit/369e366e91d0d41ff51f83153aac4387262881cb))
* update SDK settings ([c9f0b2f](https://github.com/togethercomputer/together-typescript/commit/c9f0b2f5ba4a2c8c934b67f481b13480b4ac21cf))
