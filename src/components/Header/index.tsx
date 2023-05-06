import { Transition } from '@headlessui/react'

export const Header = () => {
    return (
        <Transition
            show={true}
            appear={true}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <header className="mx-auto text-justify text-white py-4 mt-12 sm:px-4">
                <div className="max-w-7xl">
                    <Transition.Child
                        enter="transition-opacity ease-linear duration-500"
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scale-100"
                        leave="transition-opacity ease-linear duration-600"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-0"
                    >
                        <h1 className="py-6 text-gradient text-center text-7xl font-bold tracking-tight text-green-400">Http Status code</h1>
                    </Transition.Child>
                    <Transition.Child
                        enter="transition-opacity ease-linear duration-700"
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scale-100"
                        leave="transition-opacity ease-linear duration-800"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-0"
                    >
                        <p className="mt-2 text-lg leading-8 text-white-200">
                            HTTPStatusCode  é um código numérico que é retornado por um servidor web em resposta a uma solicitação HTTP feita por um cliente, como um navegador da web. Esse código indica se a solicitação foi bem-sucedida,
                            redirecionada, encontrou um erro ou outras informações relevantes.
                        </p>
                    </Transition.Child>
                    <Transition.Child
                        enter="transition-opacity ease-linear duration-900"
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scale-100"
                        leave="transition-opacity ease-linear duration-1000"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-0"
                    >
                        <p className="mt-4 text-lg leading-8 text-white-200">
                            É importante entender os códigos de status HTTP ao desenvolver ou gerenciar um site ou aplicação web, pois eles podem indicar problemas que precisam ser corrigidos, como erros de servidor ou de rota, e ajudar a melhorar a experiência do usuário.
                        </p>

                    </Transition.Child>
                    <Transition.Child
                        enter="transition-opacity ease-linear duration-1000"
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scale-100"
                        leave="transition-opacity ease-linear duration-1100"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-0"
                    >
                        <p className="mt-4 text-lg leading-8 text-white-200">
                            Os códigos de status HTTP são divididos em cinco classes: <strong>1xx, 2xx, 3xx, 4xx e 5xx</strong>.
                            Cada classe representa um tipo diferente de resposta.
                        </p>
                        <ul>
                            <li className="py-2 hover:scale-95"><strong className="text-blue-500 rounded-md shadow-lg">1xx</strong>  indicam informações de status ou progresso.</li>
                            <li className="py-2 hover:scale-95"><strong className="text-green-500">2xx</strong>  indicam que a solicitação foi bem-sucedida.</li>
                            <li className="py-2 hover:scale-95"><strong className="text-yellow-500">3xx</strong> indicam um redirecionamento.</li>
                            <li className="py-2 hover:scale-95"> <strong className="text-yellow-500"> 4xx</strong> indicam um erro do cliente.</li>
                            <li className="py-2 hover:scale-95"><strong className="text-red-500">5xx</strong> indicam um erro do servidor.</li>
                        </ul>
                        <p className="mt-4 text-lg leading-8 text-white-200">
                            Em resumo, o HttpStatusCode é uma ferramenta importante para entender a comunicação entre o cliente e o servidor em uma aplicação web. Se você está desenvolvendo um site ou aplicativo, é fundamental estar familiarizado com esses códigos e saber como lidar com eles.
                        </p>
                        <p className="mt-4 text-lg leading-8 text-white-200">
                            Clique em cada um dos cards abaixo para saber mais.
                        </p>
                    </Transition.Child>

                </div>
            </header>
        </Transition>
    )
}

export default Header;