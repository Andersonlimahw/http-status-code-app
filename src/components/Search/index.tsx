import { EActionType } from "../Wrapper/flux";
import { useHttpList } from "../Wrapper/hooks/use-http-list";

export const Search = () => {
    const zustandStore = useHttpList((state: any) => state);
    const { dispatch } = zustandStore;

    function searchByCode(code: string) {
        return dispatch({
            type: EActionType.FILTER_BY_CODE,
            payload: {
                search: code
            }
        });
    }

    return (
        <div className="mx-auto">            
            <div className="relative mt-2 rounded-md shadow-sm border-b-solid border-2 border-green-500">             
                <input
                    type="search"
                    name="search"
                    id="search"
                    className="inline-block space-2x mx-4 px-2 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-lime-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Pesquisar código..."
                    onChange={({ target }) => searchByCode(target.value)}
                />              
            </div>
        </div>
    )
}