// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ImageClassificationAPI from 'cloudflare/resources/ai/model/image-classification/image-classification';
import * as SpeechRecognitionAPI from 'cloudflare/resources/ai/model/speech-recognition/speech-recognition';
import * as TextClassificationAPI from 'cloudflare/resources/ai/model/text-classification/text-classification';
import * as TextEmbeddingsAPI from 'cloudflare/resources/ai/model/text-embeddings/text-embeddings';
import * as TextGenerationAPI from 'cloudflare/resources/ai/model/text-generation/text-generation';
import * as TranslationAPI from 'cloudflare/resources/ai/model/translation/translation';

export class Model extends APIResource {
  imageClassification: ImageClassificationAPI.ImageClassification =
    new ImageClassificationAPI.ImageClassification(this._client);
  speechRecognition: SpeechRecognitionAPI.SpeechRecognition = new SpeechRecognitionAPI.SpeechRecognition(
    this._client,
  );
  textClassification: TextClassificationAPI.TextClassification = new TextClassificationAPI.TextClassification(
    this._client,
  );
  textEmbeddings: TextEmbeddingsAPI.TextEmbeddings = new TextEmbeddingsAPI.TextEmbeddings(this._client);
  textGeneration: TextGenerationAPI.TextGeneration = new TextGenerationAPI.TextGeneration(this._client);
  translation: TranslationAPI.Translation = new TranslationAPI.Translation(this._client);
}

export namespace Model {
  export import ImageClassification = ImageClassificationAPI.ImageClassification;
  export import SpeechRecognition = SpeechRecognitionAPI.SpeechRecognition;
  export import TextClassification = TextClassificationAPI.TextClassification;
  export import TextEmbeddings = TextEmbeddingsAPI.TextEmbeddings;
  export import TextGeneration = TextGenerationAPI.TextGeneration;
  export import Translation = TranslationAPI.Translation;
}
