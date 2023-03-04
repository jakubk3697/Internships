export default function handler(req, res) {
    res.status(200).json({ name: 'Jakub', surName: 'Kaminski', age: 25, department: 'IT' });
}