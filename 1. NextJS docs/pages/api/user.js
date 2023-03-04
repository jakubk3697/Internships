export default function handler(req, res) {
    if (req.method !== 'GET') return;
    res.status(200).json({ name: 'Jakub', surName: 'Kaminski', age: 25, department: 'IT' });
}