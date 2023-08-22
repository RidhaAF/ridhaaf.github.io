function fetchProject() {
  console.log("Fetching Data");
  fetch("dist/db/projects.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";
      // sort from latest project
      const sorted = data["result"].reverse();
      sorted.forEach(function (item) {
        output += `
          <div class="mb-12 p-4 md:w-1/2">
            <div class="overflow-hidden rounded-md shadow-md">
              <img src="${item.image}" alt="${item.name}" width="w-full" />
            </div>
            <a
              href="${item.url}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3
                class="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white"
              >
                ${item.name}
              </h3>
            </a>
            <p class="text-base font-medium text-secondary">
                ${item.description}
            </p>
          </div>
        `;
      });
      document.getElementById("project-container").innerHTML = output;
    })
    .catch((e) => {
      console.log(`Error fetching data : ${e}`);
      document.getElementById(
        "project-container"
      ).innerHTML = `<p class="text-base font-medium text-secondary">
        Error fetching data, please try again later.
    </p>`;
    });
}

fetchProject();
