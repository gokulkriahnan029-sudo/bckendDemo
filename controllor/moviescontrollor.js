import movie from "../models/movieModule.js"

export const moviesGET = async(req,res) => {
    try {
        const movies = await  movie.find();
        res.json(movies)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export const moviesPOST = async(req,res) => {
    
    const newmovie = new movie({
            title: req.body.title,
            desc: req.body.desc,
        })

    try {
        const movie = await newmovie.save();
        return res.status(201).json(movie)
    } catch (err) {
        console.error(err.message)
        return res.status(400).json({ message : err.message})
    }
}

export const moviesPUT = async(req,res) => {
    try {
        const updatedmovie = await movie.findOneAndUpdate({ _id: req.params.id},{ title: req.body.title, desc: req.body.desc},{ new : true})
        res.status(200).json(updatedmovie)
    } catch (err) {
        res.json({message: err.message})
    }
}

export const moviesDELETE = async(req,res) => {
    try {
        await movie.deleteOne({ _id : req.params.id})
        res.json({message: "deleted"})
    } catch (error) {
        res.status(500).json({message: err.message})
    }
}

