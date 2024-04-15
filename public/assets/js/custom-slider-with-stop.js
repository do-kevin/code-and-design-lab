function customSlider({
  minWidth = 768,
  maxWidth = 767,
  targetClassName = null,
  duration = 1500,
}) {
  if (!targetClassName || typeof targetClassName !== "string") {
    throw new Error(
      'The "targetClassName" parameter is missing or not a string.',
    );
  }

  if (typeof minWidth !== "number" || typeof maxWidth !== "number") {
    throw new Error(
      'The "minWidth" and "maxWidth" parameters should be of type number.',
    );
  }

  if (typeof duration !== "number") {
    throw new Error('The "duration" parameter should be of type number.');
  }

  var self = this;

  this.slider = document.querySelectorAll(targetClassName);

  if (!this.slider || this.slider.length === 0) {
    throw new Error(`No elements found with class "${targetClassName}".`);
  }

  this.currentSlide = 1;

  this.iterationCompleted = false;

  this.setImagePreloadLink = function (index, slider) {
    if (!slider[index]) {
      return null;
    }

    var linkElem = document.createElement("link");
    linkElem.rel = "preload";
    linkElem.as = "image";

    const doesDesktopLinkExist = document.querySelector(
      'link[href="' + slider[index].children[0].srcset + '"]',
    );

    const doesMobileLinkExist = document.querySelector(
      'link[href="' + slider[index].lastElementChild.src + '"]',
    );

    if (!doesDesktopLinkExist) {
      var linkDesktopElem = linkElem.cloneNode(false);
      linkDesktopElem.href = slider[index].children[0].srcset;
      linkDesktopElem.media = "(min-width: 768px)";
      document.head.appendChild(linkDesktopElem);
    }

    if (!doesMobileLinkExist) {
      var linkMobileElem = linkElem.cloneNode(false);
      linkMobileElem.href = slider[index].lastElementChild.src;
      linkMobileElem.media = "(max-width: 767px)";
      document.head.appendChild(linkMobileElem);
    }
  };

  this.sliderInterval = setInterval(function () {
    self.iterationCompleted =
      self.currentSlide + 1 < self.slider.length + 1 ? false : true;

    if (self.iterationCompleted) {
      clearInterval(self.sliderInterval);
    }

    if (self.currentSlide <= self.slider.length - 2) {
      self.setImagePreloadLink(self.currentSlide + 2, self.slider);
    }
  }, duration);

  var slideTimer = null;

  this.start = function () {
    slideTimer = setInterval(function () {
      [].forEach.call(self.slider, function (el, index) {
        self.setImagePreloadLink(index, self.slider);
        el.classList.add("hidden");
      });

      self.currentSlide + 1 < self.slider.length + 1
        ? self.currentSlide++
        : (self.currentSlide = 1);

      self.slider[self.currentSlide - 1].classList.remove("hidden");
    }, duration);
  };

  this.stop = function () {
    clearInterval(slideTimer);
  };
}
