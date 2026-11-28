# 📚 The Theory of RAG – Teaching AI New Tricks

## 📖 Overview

Traditional LLMs rely on their training data and provided prompts. RAG allows them to retrieve relevant information from external documents before generating responses, making answers more accurate and context-aware.

## 🎯 Learning Objectives

- Understand RAG and why it is needed.
- Learn the limitations of traditional LLMs.
- Understand RAG vs. Fine-Tuning.
- Explore document ingestion and chunking.
- Understand embeddings and vector storage.
- Learn similarity search and information retrieval.
- Understand how retrieved context is used by LLMs.
- Explore techniques for reducing hallucinations.

## 🧠 1. What Is RAG?

**RAG stands for Retrieval-Augmented Generation.**

It combines three main processes:

1. **Retrieval:** Searches external documents for relevant information.
2. **Augmentation:** Adds retrieved information to the LLM prompt.
3. **Generation:** Uses the provided context to generate an answer.

RAG helps LLMs work with private, updated, and external information without requiring the model to be retrained.

## ⚙️ 2. RAG Architecture

A typical RAG pipeline consists of six stages:

`Ingestion → Chunking → Embedding → Storage → Retrieval → Generation`

- **Ingestion:** Loads data from PDFs, Word documents, text files, and other sources.
- **Chunking:** Splits large documents into smaller, meaningful pieces.
- **Embedding:** Converts text chunks into numerical vectors representing their meaning.
- **Storage:** Saves the original text, embeddings, and metadata.
- **Retrieval:** Finds relevant chunks using similarity search, such as cosine similarity.
- **Generation:** Sends retrieved context and the user's question to the LLM to generate an answer.

## 🔍 3. Core Concepts

- **Context Window:** The maximum amount of information an LLM can process in one request.
- **Context Stuffing:** Placing retrieved information directly into the LLM prompt.
- **Chunk Overlap:** Repeating a small portion of the previous chunk to preserve context.
- **Embeddings:** Numerical representations of text meaning.
- **Cosine Similarity:** Measures the similarity between two vectors.
- **Top-K:** Selects the most relevant chunks.
- **Threshold:** Sets a minimum similarity score for retrieved chunks.
- **Hallucination Prevention:** Uses prompt instructions to prevent unsupported answers.

## ⚖️ 4. RAG vs. Fine-Tuning

| RAG | Fine-Tuning |
|---|---|
| Retrieves external information | Further trains an existing model |
| Best for changing facts and documents | Best for changing behavior and style |
| Does not require retraining when documents change | Requires additional training |

## 🔄 5. How RAG Works in Practice

Consider a student asking an educational chatbot:

**Question:** How much is the Full Stack class?

The system:
1. Converts the question into an embedding.
2. Searches stored document embeddings.
3. Retrieves the most relevant chunks.
4. Adds the retrieved information to the prompt.
5. Sends the prompt to the LLM.
6. Generates an answer based on the retrieved context.

If the answer is not available in the retrieved information, the system should avoid guessing.

## 💡 Key Takeaways

- RAG connects LLMs with external knowledge.
- Retrieval finds relevant information.
- Embeddings help search by meaning.
- Chunking improves document processing and retrieval.
- Context provides evidence for AI-generated answers.
- Proper retrieval and prompting help reduce hallucinations.

## 📌 Conclusion

RAG is an important technique for building AI applications that need access to private and frequently updated information. It combines the power of information retrieval with the language-generation capabilities of LLMs.

**The main idea: Give AI the right information at the right time instead of expecting it to know everything.**

## 📚 Learning Material

Based on: *The Theory of RAG – Teaching the AI New Tricks*