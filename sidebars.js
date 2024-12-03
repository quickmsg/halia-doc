// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  haliaSidebar: [
    'about',
    'concepts',
    {
      type: 'category',
      label: '设备',
      link: {
        type: 'generated-index'
      },
      items: [
        // 'devices/intro',
        'devices/metadata',
        'devices/device-template',
        'devices/source-template',
        'devices/sink-template',
        {
          type: 'category',
          label: '协议',
          link: {
            type: 'generated-index'
          },
          items: [
            'devices/devices/modbus',
            'devices/devices/opcua',
            'devices/devices/coap'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '应用',
      link: {
        type: 'generated-index'
      },
      items: [
        'apps/mqtt',
        'apps/http',
        'apps/influxdb',
        'apps/tdengine',
        'apps/kafka',
      ]
    },
    {
      type: 'category',
      label: '规则',
      link: {
        type: 'generated-index'
      },
      items: [
        {
          type: 'category',
          label: '源节点',
          link: {
            type: 'generated-index'
          },
          items: [
            'rules/sources/device',
            'rules/sources/app',
          ]
        },
        {
          type: 'category',
          label: '处理节点',
          link: {
            type: 'generated-index'
          },
          items: [
            'rules/functions/filter',
            'rules/functions/merge',
            'rules/functions/window',
            {
              type: 'category',
              label: '计算节点',
              link: {
                type: 'generated-index'
              },
              items: [
                'rules/functions/computes/array',
              ]
            }
          ]
        },
        {
          type: 'category',
          label: '动作节点',
          link: {
            type: 'generated-index'
          },
          items: [
            'rules/sinks/device',
            'rules/sinks/app',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '模式',
      link: {
        type: 'generated-index'
      },
      items: [
        {
          type: 'category',
          label: '解码',
          link: {
            type: 'generated-index'
          },
          items: [
            'schemas/decode/avro',
            'schemas/decode/csv',
            'schemas/decode/protobuf',
          ]
        }
      ]
    }
  ],
};

export default sidebars;
