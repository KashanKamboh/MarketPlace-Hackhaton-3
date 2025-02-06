export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-05'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)


export const  token= assertValue(
  "skbOlWxnF6WPhfmjGQBIaeqSVdYowYHYIjvtbg8u3chVqRhLqj2ZPPHkaxwVao2NpouItQagYoAq5ByZAfL13RK7o3zjwAWbfX1CuFR6Lo1yFuZuSsyFGS1uqFwR1M1Ytdudb1LLKpgPLJ0eAAPraHpeca7Yvl2fAbQyWihNfOXz6lx23ltr",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
