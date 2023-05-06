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
                        <h2 className="text-3xl font-bold tracking-tight text-green-400 sm:text-4xl">Http Status code</h2>
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
                            Uma requisição http (Hyper text transport protocol), é uma forma de comunicação padrão entre client-side e server-side, nesta comunicação é retornado um código de resposta.
                            Entender bem estes códigos é essencial, pois a partir deles é possível tratar o client-side
                            para que apresente a experiência adequada para o usuário, e o server-side <strong className="text-green-600">( Back-end )</strong>  para retornar o código correto para o client-side <strong className="text-green-600">( Front-end )</strong> , ou outras aplicações também de back-end.
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
                            Num exemplo prático ao solicitar uma informação o método http ideal é um <strong className="text-green-600">GET</strong>  com o <strong className="text-green-500">HttpStatusCode: 200</strong>  que representa sucesso.
                        </p>
                    </Transition.Child>
                </div>
            </header>
        </Transition>
    )
}

export default Header;