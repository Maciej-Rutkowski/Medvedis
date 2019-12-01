const navigation = document.querySelector(".mobile");
document.querySelector(".burger").addEventListener('click', function () {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
})