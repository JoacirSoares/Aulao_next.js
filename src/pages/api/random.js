export default (req, res) => {
    res.status(200).json({ valor: Math.random() })
}