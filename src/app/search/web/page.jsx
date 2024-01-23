export default async function WebSearchPage({ searchParams }) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}`
  );
  const data = await response.json();
  const results = data.items;
  return (
    <div>{results && results.map((result) => <h1>{result.title}</h1>)}</div>
  );
}
