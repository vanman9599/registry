import { useLoaderData } from 'react-router-dom'
import type { SearchLoaderResult } from './searchLoader';
import PackageListItem from '../../components/PackageListItem';

function SearchPage() {
    const {searchResults} = useLoaderData() as SearchLoaderResult;
    const renderedResults = searchResults.map((result) =>{
      return <PackageListItem pack={result} key={result.name} />
    })
  return (
    <div>
          <h1 className="text-2x font-bold my-6">Search Results</h1>
      <div className="space-y-4 mt-4">{renderedResults}</div>

    </div>
    )
}

export default SearchPage