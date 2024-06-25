const asyncHandler = require('express-async-handler');
const Example = require('./example.dto');

// @desc    Create a new record
// @route   POST /api/
// @access  Public
const create = asyncHandler(async (req, res) => {
    const { id, uName, configs } = req.body;

    const isExisting = await Example.findOne({ id });

    if (isExisting) {
        res.status(400);
        throw new Error('already exists');
    }

    const example = new Example({ id, uName, configs });

    if (example) {
        const createdExample = await example.save();
        res.status(201).json(createdExample);
    } else {
        res.status(400);
        throw new Error('Invalid data');
    }
});

// @desc    Get by ID
// @route   GET /api/:id
// @access  Public
const getById = asyncHandler(async (req, res) => {
    const example = await Example.findById(req.params.id);

    if (example) {
        res.json(example);
    } else {
        res.status(404);
        throw new Error('Not found');
    }
});

// @desc    Update a Record
// @route   PUT /api/:id
// @access  Public
const update = asyncHandler(async (req, res) => {
    const { id, uName, configs } = req.body;

    const example = await Example.findById(req.params.id);

    if (example) {
        example.uName = uName || example.uName;
        example.password = configs || example.configs;

        const updatedExample = await example.save();
        res.json(updatedExample);
    } else {
        res.status(404);
        throw new Error('Not found');
    }
});

// @desc    Delete
// @route   DELETE /api/:id
// @access  Public
const delete = asyncHandler(async (req, res) => {
    const example = await Example.findById(req.params.id);

    if (example) {
        await example.remove();
        res.json({ message: 'Removed' });
    } else {
        res.status(404);
        throw new Error('Not found');
    }
});

module.exports = {
    create,
    getById,
    update,
    delete
};
