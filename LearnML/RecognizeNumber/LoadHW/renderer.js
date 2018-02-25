// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

(function () {

    class Main {

        constructor() {
            this.IMAGE_URLS = [
                ["0-01.jpg", "0-02.jpg", "0-03.jpg", "0-04.jpg", "0-05.jpg", "0-06.jpg", "0-07.jpg", "0-08.jpg", "0-09.jpg", "0-10.jpg"],
                ["1-01.jpg", "1-02.jpg", "1-03.jpg", "1-04.jpg", "1-05.jpg", "1-06.jpg", "1-07.jpg", "1-08.jpg", "1-09.jpg", "1-10.jpg"],
                ["2-01.jpg", "2-02.jpg", "2-03.jpg", "2-04.jpg", "2-05.jpg", "2-06.jpg", "2-07.jpg", "2-08.jpg", "2-09.jpg", "2-10.jpg"],
                ["3-01.jpg", "3-02.jpg", "3-03.jpg", "3-04.jpg", "3-05.jpg", "3-06.jpg", "3-07.jpg", "3-08.jpg", "3-09.jpg", "3-10.jpg"],
                ["4-01.jpg", "4-02.jpg", "4-03.jpg", "4-04.jpg", "4-05.jpg", "4-06.jpg", "4-07.jpg", "4-08.jpg", "4-09.jpg", "4-10.jpg"],
                ["5-01.jpg", "5-02.jpg", "5-03.jpg", "5-04.jpg", "5-05.jpg", "5-06.jpg", "5-07.jpg", "5-08.jpg", "5-09.jpg", "5-10.jpg"],
                ["6-01.jpg", "6-02.jpg", "6-03.jpg", "6-04.jpg", "6-05.jpg", "6-06.jpg", "6-07.jpg", "6-08.jpg", "6-09.jpg", "6-10.jpg"],
                ["7-01.jpg", "7-02.jpg", "7-03.jpg", "7-04.jpg", "7-05.jpg", "7-06.jpg", "7-07.jpg", "7-08.jpg", "7-09.jpg", "7-10.jpg"],
                ["8-01.jpg", "8-02.jpg", "8-03.jpg", "8-04.jpg", "8-05.jpg", "8-06.jpg", "8-07.jpg", "8-08.jpg", "8-09.jpg", "8-10.jpg"],
                ["9-01.jpg", "9-02.jpg", "9-03.jpg", "9-04.jpg", "9-05.jpg", "9-06.jpg", "9-07.jpg", "9-08.jpg", "9-09.jpg", "9-10.jpg"]
            ];
            this.output = document.querySelector("#output");
            this.buildDrawingBoard();
            this.loadImages();

        }

        buildDrawingBoard() {
            this.canvas = document.createElement("canvas");
            this.canvas.width = 20;
            this.canvas.height = 20;
            this.context2d = this.canvas.getContext("2d");
        }

        /**
         *
         * @param image {Image}
         * @returns {ImageData}
         */
        getDataFromImage(image) {
            this.context2d.save();
            this.context2d.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.context2d.drawImage(image, 0, 0);
            let id = this.context2d.getImageData(0, 0, this.canvas.width, this.canvas.height);
            this.context2d.restore();
            return id;
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

        /**
         *
         * @param idMat {Array} idMat id Image data matrix
         * @param x
         * @param y
         * @param value
         */
        putValueToIdMat(idMat, x, y, value) {
            if (!idMat[y]) {
                idMat[y] = [];
            }
            idMat[y][x] = value;
        }

        /**
         *
         * @param context2d {CanvasRenderingContext2D}
         * @param idMat
         * @param distX
         * @param distY
         */
        drawMat(context2d, idMat, distX, distY) {
            for (let y = 0; y < idMat.length; y++) {
                let arr = idMat[y];
                for (let x = 0; x < arr.length; x++) {
                    let colorValue = arr[x];
                    context2d.save();
                    context2d.fillStyle = `rgba(${colorValue},${colorValue},${colorValue},1)`;
                    context2d.fillRect(x + distX, y + distY, 1, 1);
                    context2d.restore();
                }
            }
        }

        async loadImages() {
            let str = "";
            let idMats = [];
            let data_arr = [];
            let target_arr = [];
            for (let i = 0; i < this.IMAGE_URLS.length; i++) {
                let arr = this.IMAGE_URLS[i];
                for (let j = 0; j < arr.length; j++) {
                    let src = `hw/${arr[j]}`;
                    str += arr[j] + ",";
                    let img = await this.loadImage(src);
                    let id = this.getDataFromImage(img);

                    let idMat = [];
                    let pixelIndex = 0;
                    let photoData = [];
                    for (let y = 0; y < id.height; y++) {
                        for (let x = 0; x < id.width; x++) {
                            let colorValue = Math.round((id.data[pixelIndex] + id.data[pixelIndex + 1] + id.data[pixelIndex + 2]) / 3);
                            this.putValueToIdMat(idMat, x, y, colorValue);
                            pixelIndex += 4;
                            photoData.push(colorValue);
                        }
                    }
                    data_arr.push(photoData);
                    idMats.push(idMat);
                    target_arr.push(i);
                    console.log(`i:${i},src:${src}`);
                }
                str += "\n";
            }
            // this.output.value = str;
            this.output.value = JSON.stringify(data_arr);
            // this.output.value = JSON.stringify(target_arr);
            this.showNumbersInCanvas(idMats);

        }

        showNumbersInCanvas(data_arr) {

            let div = document.createElement("div");
            let canvas = document.createElement("canvas");
            canvas.width = 400;
            canvas.height = 400;
            div.appendChild(canvas);
            let c2d = canvas.getContext("2d");

            for (let i = 0; i < 100; i++) {
                let distX = (i % 10) * 20;
                let distY = Math.floor(i / 10) * 20;
                this.drawMat(c2d, data_arr[i], distX, distY);

                console.log(distX, distY);
            }

            document.body.appendChild(div);
        }
    }

    new Main();
})();