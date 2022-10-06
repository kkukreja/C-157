AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      console.log("d")
      
    },
  
    handlePlacesList: function () {
        console.log("e")
      const id = this.el.getAttribute("id");
      const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#placesContainer");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "orange",
          opacity: 1,
        });
      }
      console.log("f")
    },
    handleMouseEnterEvents: function () {
        console.log("ggggggggggg"+this.el.getAttribute("id"))
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", function() {
        console.log("hhhhhh")
        this.handlePlacesList();
        console.log("iiiiiiii")
      });
      console.log("jjjjjjjjjjjj")
    },
  });
  