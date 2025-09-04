import axios from 'axios'

export const getAIExplanation = async (expression) => {
  try {

    if(!expression.trim()) return 'Kindly give valid Expression'

    const promptMessage = `
    1.You are a best tutor.. and for the given ${expression} give me the explanation for it and its result.. also teach me like I'm 10 years old.. 
    2.The answer should be like 1 line and then 3-4 bulletin points and then 2 line conclusion.. 
    3.Don't give extra suggestions or symbols also don't give like 'Alright,here's the explanation for..' 
    4.In case the expression doesn't look like a valid calculator expression.. tell me as give the proper expression.. this is not a math.. like this..
    5.Give the response as text format..`

    const response = await axios.post('https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'cognitivecomputations/dolphin-mistral-24b-venice-edition:free',
        messages: [
          {
            role: 'user',
            content: promptMessage
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    )

    const text = response.data.choices[0].message.content

    if (!text.trim()) return 'AI didn\'t give any response'

    return text
  }
  catch (err) {
    return err.message
  }
}