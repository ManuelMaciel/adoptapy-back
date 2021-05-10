function validateString(value, min, max) {
    if (!value) return false;
    if (!isNaN(value)) return false;
    if (value.length < min) return false;
    if (value.length > max) return false;
    return true;
}

// latitude should be < 90 && > -90
const isLatitude = (num) => isFinite(num) && Math.abs(num) <= 90;
// latitude should be < 180 && > -180
const isLongitude = (num) => isFinite(num) && Math.abs(num) <= 180;

module.exports = {
    validateAdoptions: (req, res, next) => {
        if (!req.files) {
            return res.status(400).json({
                msg:
                    "No seleccionaste ningun archivo, por favor seleccione aunque sea uno.",
            });
        }
        
        const {
            petName,
            petSpecie,
            petAge,
            petSize,
            petSex,
            petBreed,
            petDescription,
            petCity,
            latitude,
            longitude,
            name,
            number,
        } = req.body;

        console.log(req.body);

        if (!validateString(petName, 2, 25)) {
            return res.status(403).json({
                msg:
                    "petName: debe tener entre 2 y 25 carácteres de extensión.",
            });
        }

        if (
            !petSpecie ||
            petSpecie !== "perro" &&
            petSpecie !== "gato" &&
            petSpecie !== "otro"
        ) {
            return res.status(403).json({
                msg:
                    'petSpecie: solo acepta 3 valores, "perro", "gato", "otro".',
            });
        }

        if (!petAge || petAge < 0 && petAge < 30) {
            return res.status(403).json({
                msg: "petAge: deber ser mayor a 0 y menor a 30",
            });
        }

        if (
            !petSize ||
            petSize !== "grande" &&
            petSize !== "mediano" &&
            petSize !== "pequeño"
        ) {
            return res.status(403).json({
                msg: 'petSize: solo puede ser "grande", "mediano" o "pequeño".',
            });
        }

        if (
            !petSex ||
            petSex !== "hembra" &&
            petSex !== "macho" &&
            petSex !== "desconocido"
        ) {
            return res.status(403).json({
                msg:
                    'petSex: solo puede ser "hembra", "macho" o "desconocido".',
            });
        }

        if (!validateString(petDescription, 25, 250)) {
            return res.status(403).json({
                msg:
                    "petDescription: debe tener entre 25 y 250 carácteres de extensión.",
            });
        }

        if (!validateString(petBreed, 4, 40)) {
            return res.status(403).json({
                msg:
                    "petBreed: debe tener entre 4 y 40 carácteres de extensión.",
            });
        }

        if (!validateString(petCity, 3, 40)) {
            return res.status(403).json({
                msg:
                    "petCity: debe tener entre 3 y 40 carácteres de extensión.",
            });
        }

        if (!isLatitude(latitude) || !isLongitude(longitude)) {
            return res.status(403).json({
                msg: "Por favor, proporcione una latitude y longitude válidas.",
            });
        }

        if (!validateString(name, 3, 40)) {
            return res.status(403).json({
                msg: "name: debe tener entre 3 y 40 carácteres de extensión.",
            });
        }

        if (!number || number.length !== 10 || isNaN(number)) {
            return res.status(403).json({
                msg:
                    "number: debe tener exactamente 10 carácteres de extensión. Ej: 0981123123",
            });
        }

        //if everything is ok then
        next();
    },
};