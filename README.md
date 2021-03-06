# chrome-github-open-with-github1s

A small Chrome addon to open a GitHub repo directly in GitHub1s.

## Demo

![image](https://user-images.githubusercontent.com/41482988/122925027-badb6f00-d366-11eb-9a91-52189478d178.png)

## Installation

1. Download the latest stable release

[Download latest](https://github.com/runmaxde/chrome-github-open-with-github1s/releases/latest)

2. Unzipped the downloaded folder

![image](https://user-images.githubusercontent.com/41482988/122927069-c9c32100-d368-11eb-9d5b-a48eb88cc15b.png)

3. Open Chrome and go to `chrome://extensions/`

![image](https://user-images.githubusercontent.com/41482988/122925335-068e1880-d367-11eb-8208-73f0002bc57b.png)

4. Enable developer mode

![image](https://user-images.githubusercontent.com/41482988/122926061-c4b1a200-d367-11eb-929b-d3f73ba8867b.jpeg)

5. Load Addon by clicking `Load unpacked` and pick the unzipped folder

![image](https://user-images.githubusercontent.com/41482988/122927708-6f769000-d369-11eb-8f8c-39449d5aad1a.png)

## Expand / API

If you want to add another service like **GitPod**, you can add a new `createAction` to the `injectionScript.js` and provide an object like below.

``` javascript
DomWorkerInstance.createAction({
  TITLE: "Your Action",
  FN: function () {
    console.log("Hello World");
  },
  LOGO: `
    <svg class="octicon octicon-desktop-download mr-3" viewBox="0 0 16 16"  width="16" height="16" viewBox="0 0 16 16">
      <!-- IMAGE -->
    </svg>`
});
```
