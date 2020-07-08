const moonPath =
"M27.5 42.1637C27.5 65.3596 45 84.1637 45 84.1637C20.1472 84.1637 0 65.3596 0 42.1637C0 18.9677 20.1472 0.163666 45 0.163666C45 0.163666 27.5 18.9677 27.5 42.1637Z";
const sunPath =
"M90 42C90 65.196 69.8528 84 45 84C20.1472 84 0 65.196 0 42C0 18.804 20.1472 0 45 0C69.8528 0 90 18.804 90 42Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 650,
    easing: "easeOutExpo",
  });
  timeline
    .add({
      targets: ".sun",
      d: [
        {
          value: toggle ? sunPath : moonPath,
        },
      ],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320,
      },
      "-= 350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(199,199,199)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)",
      },
      "-= 700"
    );
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
