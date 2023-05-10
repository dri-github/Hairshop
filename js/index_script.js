var buttons = document.getElementsByClassName("curtains_box_list")[0].getElementsByTagName("li");
var last_button = buttons[0];
var last_data_element = document.getElementsByClassName("data")[0];

let data_list = document.getElementsByClassName("data");
for (i = 1; i < data_list.length; i++) {
    data_list[i].setAttribute("style", "display: none");
}

for (i = 0; i < buttons.length; i++) {
    let element = document.getElementsByClassName("data")[i];
    buttons[i].onmouseenter = function (event) {
        if (element) {
            if (last_data_element) {
                last_data_element.setAttribute("style", "display: none");

                last_button.style.backgroundColor = "#ffffff";
            }
            element.removeAttribute("style");
            event.target.style.backgroundColor = "#99cc00";
            last_button = event.target;
        }
        last_data_element = element;
    }
}

last_button.style.backgroundColor = "#99cc00";