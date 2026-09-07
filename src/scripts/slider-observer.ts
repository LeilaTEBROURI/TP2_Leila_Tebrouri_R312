const menuItems = document.querySelectorAll<HTMLAnchorElement>(".menu-item");
const items = document.querySelectorAll<HTMLElement>(".item");
const slider = document.querySelector<HTMLElement>(".slider");

console.log("menuItems", menuItems);
console.log("items", items);

if (slider) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const menuItem = document.querySelector<HTMLAnchorElement>(`.menu-item[href="#${id}"]`);

        if (entry.isIntersecting) {
          menuItems.forEach((link) => {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
          });
          menuItem?.classList.add("active");
          menuItem?.setAttribute("aria-current", "true");
        }
      });
    },
    { root: slider, threshold: 0.55 },
  );

  items.forEach((item) => observer.observe(item));
}
