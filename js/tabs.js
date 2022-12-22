document.addEventListener("DOMContentLoaded", function () {

  class Tab {
    constructor(el) {
      this.$switchWrapper = el;
      this.$switch = this.$switchWrapper.querySelector(".tabs-list");
      this.$switchBoxes = this.$switchWrapper.querySelectorAll(".tabs-node");
      this.setup();
      this.asyncHidden();
    }

    asyncHidden() {
      this.$switchBoxes.forEach(box => {
        setTimeout(() => {
          box.classList.add("hidden");
        }, 100);
      });
    }

    setup() {
      this.handleClick = this.handleClick.bind(this);
      this.$switch.addEventListener("click", this.handleClick);
    }

    handleClick(e) {
      const $switchTabClicked = e.target.closest(".tabs-item"),
        $switchTab = this.$switch.querySelectorAll(".tabs-item"),
        $switchValue = this.$switch.querySelector(".tabs-value");

      if ($switchTabClicked && !$switchTabClicked.classList.contains("active")) {
        $switchTab.forEach(el => el.classList.remove("active"));
        $switchTabClicked.classList.add("active");
        $switchValue.value = $switchTabClicked.dataset.value;
      }

      this.$switchBoxes.forEach(box => {
        if ($switchTabClicked && !box.classList.contains("active") && box.dataset.boxId == $switchTabClicked.dataset.boxId) {
          box.classList.add("active");
        } else if (box.dataset.boxId !== $switchTabClicked.dataset.boxId) {
          box.classList.remove("active");
        }
      })

    }
  }

  const tabsList = document.querySelectorAll(".tabs");

  tabsList && tabsList.forEach(el => {
    const tabs = new Tab(el);
  });

});