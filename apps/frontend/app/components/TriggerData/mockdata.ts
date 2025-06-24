import { RecordMetadata } from "@repo/types";

export const mockRecords: RecordMetadata[] = [
      {
        id: '1',
        type: 'modified',
        title: 'Modified Record',
        createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hour ago
        pulledAt: new Date().toISOString()
      },
      {
        id: '2',
        type: 'original',
        title: 'request E',
        createdAt: new Date().toISOString(),
        pulledAt: new Date().toISOString()
      },
      {
        id: '3',
        type: 'original',
        title: 'request D',
        createdAt: new Date().toISOString(),
        pulledAt: new Date().toISOString()
      },
      // {
      //   id: '4',
      //   type: 'original',
      //   title: 'request C',
      //   createdAt: new Date().toISOString(),
      //   pulledAt: new Date().toISOString()
      // },
      // {
      //   id: '5',
      //   type: 'original',
      //   title: 'request B',
      //   createdAt: new Date().toISOString(),
      //   pulledAt: new Date().toISOString()
      // },
      // {
      //   id: '6',
      //   type: 'original',
      //   title: 'request A',
      //   createdAt: new Date().toISOString(),
      //   pulledAt: new Date().toISOString()
      // }
    ];