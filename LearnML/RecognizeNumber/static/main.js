class Main {
    constructor() {
        this.btnClear = document.querySelector("#btn-clear");
        this.btnRecognize = document.querySelector("#btn-recognize");

        this.preview = document.querySelector("#preview");
        this.preview.width = 20;
        this.preview.height = 20;
        this.previewContext2d = this.preview.getContext("2d");

        this.result = document.querySelector("#result");

        this.canvas = document.querySelector("canvas");
        this.canvas.width = 200;
        this.canvas.height = 200;
        this.context2d = this.canvas.getContext("2d");

        this.addListeners();
    }

    /**
     *
     * @param src
     * @returns {Promise<Image>}
     */
    loadImage(src) {
        return new Promise(function (resolve, reject) {
            let i = new Image();
            i.onload = function () {
                resolve(i);
            };
            i.onerror = reject;
            i.src = src;
        });
    }

    btnClear_clickedHandler() {
        this.context2d.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * @param photoData {Array}
     * @return {Promise<String>}
     */
    recognize(photoData) {
        return new Promise(resolve => {
            let url = `/hw?photo_data=${JSON.stringify(photoData)}`;
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.responseText);
            };
            xhr.open("GET", url);
            xhr.send();
        });
    }

    resetPreviewCanvas() {
        this.previewContext2d.clearRect(0, 0, 20, 20);
        this.previewContext2d.fillStyle = "#ffffff";
        this.previewContext2d.fillRect(0, 0, 20, 20);
    }

    async btnRecognize_clickedHandler() {
        this.resetPreviewCanvas();
        this.previewContext2d.drawImage(this.canvas, 0, 0, 20, 20);

        // //encode to jpg
        // let photoDataUrl = this.preview.toDataURL("image/jpeg", 0.6);
        // let img = await this.loadImage(photoDataUrl);
        // //re preview on canvas
        // this.resetPreviewCanvas();
        // this.previewContext2d.drawImage(img, 0, 0, 20, 20);

        let id = this.previewContext2d.getImageData(0, 0, 20, 20);
        let photoData = [];
        for (let i = 0; i < id.data.length; i += 4) {
            let colorValue = Math.round((id.data[i] + id.data[i + 1] + id.data[i + 2]) / 3);
            photoData.push(colorValue);
        }

        let result = await this.recognize(photoData);
        this.result.innerHTML = `Result:${result}`;
    }

    /**
     * @param e {MouseEvent}
     */
    canvas_mouseMoveHandler(e) {
        this.context2d.lineTo(e.x, e.y);
        this.context2d.stroke();
    }

    canvas_mouseUpHandler() {
        this.canvas.onmouseup = null;
        this.canvas.onmousemove = null;
    }

    /**
     *
     * @param e {MouseEvent}
     */
    canvas_mouseDownHandler(e) {
        this.canvas.onmousemove = this.canvas_mouseMoveHandler.bind(this);
        this.canvas.onmouseup = this.canvas_mouseUpHandler.bind(this);

        this.context2d.lineWidth = 20;
        this.context2d.lineJoin = "round";
        this.context2d.lineCap = "round";
        this.context2d.beginPath();
        this.context2d.moveTo(e.x, e.y);
    }

    addListeners() {
        this.btnClear.onclick = this.btnClear_clickedHandler.bind(this);
        this.btnRecognize.onclick = this.btnRecognize_clickedHandler.bind(this);

        this.canvas.onmousedown = this.canvas_mouseDownHandler.bind(this);
    }
}

new Main();