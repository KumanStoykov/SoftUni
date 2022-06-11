const Trip = require('../models/Trip');
const User = require('../models/User');

exports.getAll = () => Trip.find().lean();

exports.getOne = (id) => Trip.findById(id).populate('creator').populate('buddies').lean();

exports.create = (trip) => Trip.create(trip).populate('creator').populate('buddies').lean();

exports.edit = (id, trip) => Trip.findByIdAndUpdate(id, trip);

exports.delete = (id) => Trip.findByIdAndDelete(id);

exports.join = async (tripId, userId) => {
    const currentTrip = await Trip.findById(tripId);
    const currentUser = await User.findById(userId);

    currentTrip.seats -= 1;
    currentTrip.buddies.push(currentUser._id);

    currentUser.trips.push(currentTrip._id);

    return Promise.all([ currentTrip.save(), currentUser.save()]);
}