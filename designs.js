    //Variables
    // Select color input
    const colorInput = $('#colorPicker');
    // Select size input
    const inputHeight = $('#inputHeight');
    const inputWidth = $('#inputWidth');
    const canvas = $('#pixelCanvas');
    // Select Canvas
    //Form
    const sizePicker = $('.sizePicker');
    //Functions 
    function makeGrid() {
        let height = inputHeight.val();
        let width = inputWidth.val();
        canvas.innerHTML = '';
        let tbody = document.createElement('tbody');
        for (let x = 0; x < height; x++) {
            let tr = document.createElement('tr');
            for (let z = 0; z < width; z++) {
                let td = document.createElement('td');
                td.append(document.createTextNode(''));
                tr.append(td);
            }
            tbody.append(tr);
        }
        canvas.empty().append(tbody);
    };
    //Change pixel color
    function pixelClick(event) {
        let color = colorInput;
        $('body').on('click', 'td', function () {
            $(this).css('background-color', color.val());
        });
    }
    // When size is submitted by the user, call makeGrid()
    document.querySelector('form').addEventListener('submit', function (event) {
        makeGrid();
        pixelClick();
        event.preventDefault();
    });
