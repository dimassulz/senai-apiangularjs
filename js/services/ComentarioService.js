app.factory('ComentarioService', ['$http', '$q', function ($http, $q) {
    let api = 'http://localhost:8080';
    return {

        buscarTodos: function () {
            return $http.get(api+'/buscarTodos')
                .then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Erro enquanto busca todos os comentarios!');
                        return $q.reject(errResponse);
                    }
                );
        },

        inserir: function (dados) {
            return $http.post('api/inserir', dados)
                .then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Erro ao inserir comentario');
                        return $q.reject(errResponse);
                    }
                );
        },

        atualizar: function (dados, id) {
            return $http.put('api/atualizar', dados)
                .then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Erro ao atualizar comentario');
                        return $q.reject(errResponse);
                    }
                );
        },

        deletar: function (id) {
            return $http.delete('api/deletar')
                .then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('Erro deletar comentario');
                        return $q.reject(errResponse);
                    }
                );
        }

    };

}]);