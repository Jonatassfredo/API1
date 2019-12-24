const variables = {
    Api: {
        port: process.env.PORT || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://jonatassfredo:SgMQeXqRXYGYLnlT@woosh-iwm7h.gcp.mongodb.net/test?retryWrites=true&w=majority'
    },
    Security: {
        secretyKey: '44cc9e974498c40884f73ccc9a941273',
        secretyKeyAdministrator: '44cc9e974498c40884f73ccc9a941273',
        secretyKeyGerencia: '44cc9e974498c40884f73ccc9a941273',
        secretyKeyUsuario: '44cc9e974498c40884f73ccc9a941273',
        secretyKeyOperador: '44cc9e974498c40884f73ccc9a941273',
    }
}
module.exports = variables;