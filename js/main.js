var app = new Vue({
    el: '#app',
    data: {
        isActive: '',
        distanceBimby: 0,
        buttonCoord: [
            [{coordX: a = 0, coordY: a = 0, bomb: false, empty: '', number: a = 0 }, {coordX: a = 0, coordY: a = 1, bomb: true, empty: '', number: b = 0 }, {coordX: a = 0, coordY: a = 2, bomb: false, empty: '', number: c = 0 }, {coordX: a = 0, coordY: a = 3, bomb: true, empty: '', number: b = 0 }],
            [{coordX: a = 1, coordY: a = 0, bomb: false, empty: '', number: d = 0 }, {coordX: a = 1, coordY: a = 1, bomb: false, empty: '', number: e = 0 }, {coordX: a = 1, coordY: a = 2, bomb: false, empty: '', number: f = 0 }, {coordX:a =  1, coordY: a = 3, bomb: false, empty: '', number: f = 0 }],
            [{coordX: a = 2, coordY: a = 0, bomb: false, empty: '', number: g = 0 }, {coordX: a = 2, coordY: a = 1, bomb: false, empty: '', number: h = 0 }, {coordX: a = 2, coordY: a = 2, bomb: true, empty: '', number: i = 0 }, {coordX: a = 2, coordY: a = 3, bomb: false, empty: '', number: j = 0 }],
            [{coordX: a = 3, coordY: a = 0, bomb: false, empty: '', number: g = 0 }, {coordX: a = 3, coordY: a = 1, bomb: false, empty: '', number: h = 0 }, {coordX: a = 3, coordY: a = 2, bomb: false, empty: '', number: i = 0 }, {coordX: a = 3, coordY: a = 3, bomb: false, empty: '', number: j = 0 }]
        ],
    },
    methods: {
        bombSearch: function (bomba) {
            if (bomba === true) {
                this.isActive = true
            }
            else {
                app.distanceToBimby()
            }
        },
        btnsolider: function (active) {
            if (active === true) {
                this.isActivebtn = true
            }
        },
        distanceToBimby: function () {
            for (let x = 0; x < 4; x++) {
                for (let y = 0; y < 4; y++) {
                    this.buttonCoord[x][y].number = this.radiusBomb(x, y)
                    if (this.buttonCoord[x][y].bomb) {
                        this.buttonCoord[x][y].number = ''
                    }
                }
            }
        },
        radiusBomb: function (xB, yB) {
            let bombTrue = 0;
            for (let x = xB - 1; x <= xB + 1; x++) {
                for (let y = yB - 1; y <= yB + 1; y++) {
                    if (x >= 0 && x <= 3 && y >= 0 && y <= 3) {
                        if (this.buttonCoord[x][y].bomb) {
                            bombTrue++
                        }
                    }
                }
            }
            return bombTrue++
        },
        clicknumber: function (a,b) {
            if (!this.buttonCoord[a][b].bomb) {
                this.buttonCoord[a][b].empty = this.buttonCoord[a][b].number
            }
            else {
                alert ('Вы проиграли!')
            }
        }
    },
    mounted() {
        this.distanceToBimby()
    },
})  