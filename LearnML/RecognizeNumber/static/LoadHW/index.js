(function () {

    class Main {

        constructor() {
            this.IMAGE_URLS = [
                ["0-01.png", "0-02.png", "0-03.png", "0-04.png", "0-05.png", "0-06.png", "0-07.png", "0-08.png", "0-09.png", "0-10.png"],
                ["1-01.png", "1-02.png", "1-03.png", "1-04.png", "1-05.png", "1-06.png", "1-07.png", "1-08.png", "1-09.png", "1-10.png"],
                ["2-01.png", "2-02.png", "2-03.png", "2-04.png", "2-05.png", "2-06.png", "2-07.png", "2-08.png", "2-09.png", "2-10.png"],
                ["3-01.png", "3-02.png", "3-03.png", "3-04.png", "3-05.png", "3-06.png", "3-07.png", "3-08.png", "3-09.png", "3-10.png"],
                ["4-01.png", "4-02.png", "4-03.png", "4-04.png", "4-05.png", "4-06.png", "4-07.png", "4-08.png", "4-09.png", "4-10.png"],
                ["5-01.png", "5-02.png", "5-03.png", "5-04.png", "5-05.png", "5-06.png", "5-07.png", "5-08.png", "5-09.png", "5-10.png"],
                ["6-01.png", "6-02.png", "6-03.png", "6-04.png", "6-05.png", "6-06.png", "6-07.png", "6-08.png", "6-09.png", "6-10.png"],
                ["7-01.png", "7-02.png", "7-03.png", "7-04.png", "7-05.png", "7-06.png", "7-07.png", "7-08.png", "7-09.png", "7-10.png"],
                ["8-01.png", "8-02.png", "8-03.png", "8-04.png", "8-05.png", "8-06.png", "8-07.png", "8-08.png", "8-09.png", "8-10.png"],
                ["9-01.png", "9-02.png", "9-03.png", "9-04.png", "9-05.png", "9-06.png", "9-07.png", "9-08.png", "9-09.png", "9-10.png"]
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
            this.context2d.fillStyle = "#ffffff";
            this.context2d.fillRect(0, 0, this.canvas.width, this.canvas.height);
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

                    let pixelIndex = 0;
                    let photoData = [];
                    for (let y = 0; y < id.height; y++) {
                        for (let x = 0; x < id.width; x++) {
                            let colorValue = Math.round((id.data[pixelIndex] + id.data[pixelIndex + 1] + id.data[pixelIndex + 2]) / 3);
                            pixelIndex += 4;
                            photoData.push(colorValue);
                        }
                    }
                    data_arr.push(photoData);
                    target_arr.push(i);
                    console.log(`i:${i},src:${src}`);
                }
                str += "\n";
            }
            // this.output.value = str;
            // this.output.value = JSON.stringify(data_arr);
            this.output.value = JSON.stringify(target_arr);
        }
    }

    new Main();
})();