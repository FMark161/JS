//Táblázat törzsének az elérése
const userData = document.getElementById('usersTable');

//Űrlap elérése, eseményfigyelő hozzáadása
document.getElementById('userForm').addEventListener("submit", (e)=>{
    //HTML űrlap alapértelmezett viselkedés megakadályozása
    e.preventDefault();

    //FormData objektum létrehozása, az űrlap esemény hozzárendelésew
    //(e.target) az esemény címzettje
    const myformData = new FormData(e.target);

    //Az űrlap adatok áthelyezése a userData objektumba
    const userData = Object.fromEntries(myformData);

    console.log(userData);
//Másolat készítése a(z) userData objektumról 
    const userObject = {
        Vezetéknév: userData.Vezetéknév,
        Keresztnév: userData.Keresztnév,
        Email: userData.Email,
        Telefonszám: userData.Telefonszám
    }
    console.log(userObject);

    //A userObject másolatának a létrehozása
    const newObjekt = userObject;
    console.log(newObjekt);
})
