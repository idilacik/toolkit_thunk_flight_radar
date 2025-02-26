// Parametre olarak alinan deger tanimliysa o degeri donduren eger degilse "bilinmiyor" metni donduren fonksiyon

const checkValid = (value) => {
    return !value ? "Bilinmiyor" : value;
};

export default checkValid;