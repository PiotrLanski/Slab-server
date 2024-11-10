const Gym = require('../models/Gym');

exports.getAllGyms = async (req, res) => {
    try{
        const Gyms = await Gym.find();
        res.json(Gyms);
    } catch(err){
        res.status(400).send({error: err});
    }
};

exports.getGymById = async (req, res) => {
    try{
        const gym = await Gym.findById(req.params.id);
        if(!gym) return res.status(404).send({error: 'GymId not found'});
        res.json(Gym);
    } catch(err){
        res.status(400).send({error: err});
    }
};

exports.createGym = async (req, res) => {
    try{
        const newGym = new Gym(req.body);
        const savedGym = await newGym.save();
        res.status(201).send(savedGym);
    } catch(err){
        res.status(400).send({error: err});
    }
};

exports.updateGym = async (req, res) => {
    try {
        const updateGym = await Gym.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updateGym) return res.status(404).send({error: 'GymId not found'});
        res.json(updateGym);
    }catch(err){
        res.status(400).send({error: err});
    }
};

exports.deleteGym = async (req, res) => {
    try{
        const gym = await Gym.findByIdAndDelete(req.params.id);
        if (!gym) return res.status(404).send({error: 'GymId not found'});
        res.json({message: 'Gym deleted successfully.'});
    }catch(err){
        res.status(400).send({error: err});
    }
};