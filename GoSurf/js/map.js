const mapPoints = document.querySelectorAll(".map__item");
const pointsDescription = document.querySelectorAll(".point");

for (let i = 0; i < mapPoints.length; i++) {
    let mapPoint = mapPoints[i];
    let popupName = mapPoints[i].getAttribute('data-id');

    mapPoint.addEventListener("click", function (e) {
        for (let i = 0; i < pointsDescription.length; i++) {
            let curentPopup = pointsDescription[i];
            let id = curentPopup.getAttribute('id');
            if (popupName == id) {
                curentPopup.classList.toggle('__show')
            }


        }
    });

    mapPoint.addEventListener("mouseover", function () {
        for (let i = 0; i < pointsDescription.length; i++) {
            let curentPopup = pointsDescription[i];
            let id = curentPopup.getAttribute('id');
            if (popupName == id) {
                curentPopup.classList.toggle('__show')
            }


        }
    })
    mapPoint.addEventListener("mouseout", function () {
        for (let i = 0; i < pointsDescription.length; i++) {
            let curentPopup = pointsDescription[i];
            let id = curentPopup.getAttribute('id');
            if (popupName == id) {
                curentPopup.classList.toggle('__show')
            }


        }
    })
}
