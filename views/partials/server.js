const express = require('express');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Função para ler e validar o JSON (Questão 5)
const getJovens = () => {
    try {
        const data = fs.readFileSync('./jovens.json', 'utf-8');
        const jovens = JSON.parse(data);
        
        // Validação de campos vazios (Questão 5 - 0,5 pts)
        return jovens.filter(j => {
            return j.nome && j.idade !== undefined && j.horasPorDia !== undefined;
        });
    } catch (err) {
        console.error("Erro ao ler JSON:", err);
        return null;
    }
};

// Middleware para verificar se o JSON foi lido (Questão 5 - 1,0 pt)
app.use((req, res, next) => {
    const jovens = getJovens();
    if (!jovens) return res.status(500).send("Erro interno: Mensagem amigável - Não foi possível carregar os dados.");
    req.jovens = jovens;
    next();
});

// Rota Principal (Questão 2)
app.get('/', (req, res) => {
    res.render('index', { jovens: req.jovens });
});

// Rota Ativos (Questão 1 - 0,5 pts)
app.get('/ativos', (req, res) => {
    const filtrados = req.jovens.filter(j => j.afetado === true);
    res.render('index', { jovens: filtrados });
});

// Rota Não Afetados (Questão 1 - 0,5 pts)
app.get('/nao-afetados', (req, res) => {
    const filtrados = req.jovens.filter(j => j.afetado === false);
    res.render('index', { jovens: filtrados });
});

// Rota Alerta (Questão 1 e 3 - 0,5 pts)
app.get('/alerta', (req, res) => {
    const filtrados = req.jovens.filter(j => j.horasPorDia > 8);
    res.render('alerta', { jovens: filtrados });
});

// Rota Destaque (Questão 1 - 0,5 pts)
app.get('/destaque', (req, res) => {
    const filtrados = req.jovens.filter(j => j.rendimentoEscolar === "alto");
    res.render('index', { jovens: filtrados });
});

// Rota Recomendação (Questão 4)
app.get('/recomendacao', (req, res) => {
    res.render('recomendacao', { jovens: req.jovens });
});

// Rota 404 Personalizada (Questão 5 - 0,5 pts)
app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));