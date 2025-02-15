function Bubble() {
    // Time complexities
    document.getElementById("Time_Worst").innerHTML = "O(N<sup>2</sup>)";
    document.getElementById("Time_Average").innerHTML = "O(N<sup>2</sup>)";
    document.getElementById("Time_Best").innerText = "O(N)";

    // DESCRIPTION
    var descriptionElement = document.getElementById("description");
    descriptionElement.innerHTML = '<a href="bubble_sort.html" target="_self">FUNCTIONING</a>';

    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(divs[j], div_sizes[j], "yellow"); // Color update

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "red"); // Color update
                div_update(divs[j + 1], div_sizes[j + 1], "red"); // Color update

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "red"); // Height update
                div_update(divs[j + 1], div_sizes[j + 1], "red"); // Height update
            }
            div_update(divs[j], div_sizes[j], "blue"); // Color update
        }
        div_update(divs[j], div_sizes[j], "green"); // Color update
    }
    div_update(divs[0], div_sizes[0], "green"); // Color update

    enable_buttons();
}
